const fs = require('fs')
const ts = require('typescript')
const path = require('path')
const { walk } = require('@root/walk')
const { createMatchPath, register, loadConfig } = require('tsconfig-paths')
const { resolve } = require('path')
const copy = require('copy')
const crawl = require('../modules/crawl')
const replaceInFiles = require('replace-in-files')

const fileExtensions = ['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js', '/index.jsx']
const originalRequireResolve = require.resolve

require.resolve = (request, options) => {
    for (const extension of fileExtensions) {
        try {
            return originalRequireResolve(resolve(request + extension), options)
        } catch (error) {}
    }
    return originalRequireResolve(request, options)
}

function resolvePath(path, paths = {}) {
    // Sort the keys by length in descending order, so we match the most specific paths first
    const sortedKeys = Object.keys(paths).sort((a, b) => b.length - a.length)

    for (const key of sortedKeys) {
        // Create a regular expression from the key, replacing '*' with a capture group '(.*?)'
        const regex = new RegExp('^' + key.replace(/\*/g, '(.*?)') + '$')

        const match = path.match(regex)
        if (match) {
            // Get the replacement path from the paths object
            let replacementPath = paths[key][0]

            // If the replacement path contains a wildcard, replace it with the captured group from the original path
            if (replacementPath.includes('*')) {
                replacementPath = replacementPath.replace('*', match[1])
            }

            // Replace the matched part of the original path with the replacement path
            return path.replace(regex, replacementPath).trim()
        }
    }

    // If no matching key was found, return the original path
    return path
}

function loadSourceConfig(packageName, cliConfig) {
    return new Promise((resolve) => {
        let config
        let configPath
        return crawl(__dirname, (err, dir, files) => {
            if (files.includes(cliConfig.sourceConfigFileName)) {
                configPath = path.resolve(dir, cliConfig.sourceConfigFileName)
                config = require(configPath)
                return Promise.resolve(true)
            }
            return Promise.resolve()
        }).then(() => {
            if (!config) {
                const modulePath = path.join(require.resolve(cliConfig.packages[packageName]), '..')
                if (fs.existsSync(modulePath)) {
                    configPath = path.resolve(modulePath, cliConfig.sourceConfigFileName)
                    config = require(configPath)
                }
            }
            resolve({
                configPath,
                config,
            })
        })
    })
}

function loadTargetConfig({ cliConfig }) {
    return new Promise((resolve) => {
        let config
        let configPath
        return crawl(process.cwd(), (err, dir, files) => {
            if (files.includes(cliConfig.targetConfigFileName)) {
                configPath = path.resolve(dir, cliConfig.targetConfigFileName)
                config = require(configPath)
                return Promise.resolve(true)
            }
            return Promise.resolve()
        }).then(() => {
            resolve({
                configPath,
                config,
            })
        })
    })
}

function getComponentPath({ componentName, packageName, sourceConfig, sourceConfigPath }) {
    return new Promise((resolve) => {
        const exclude = ['node_modules', '.git', '.idea', '.vscode', 'dist', 'build', 'coverage', 'public', 'static', 'tmp', 'temp', 'logs', 'logs', 'log']
        const rootPath = path.resolve(sourceConfigPath, '..', sourceConfig[packageName].paths.components)
        if (componentName === 'all') return resolve(path.resolve(rootPath, 'index.ts'))
        return walk(rootPath, (err, pathname, dirent) => {
            if (err) {
                console.warn('fs stat error for %s: %s', pathname, err.message)
                return Promise.resolve()
            }
            if (exclude.includes(dirent.name)) return Promise.resolve()
            if (dirent.isDirectory() && dirent.name === componentName) {
                resolve(path.resolve(pathname, 'index.ts'))
            }

            return Promise.resolve()
        })
    })
}

async function add({ componentName, packageName, cliConfigPath }) {
    const cliConfig = require(path.resolve(process.cwd(), cliConfigPath))
    if (!componentName) {
        console.log(`Usage: ${cliConfig.commandName} <action> <component_name>`)
        return
    }
    const { config: sourceConfig, configPath: sourceConfigPath } = await loadSourceConfig(packageName, cliConfig)
    if (!sourceConfig) {
        console.log(`${cliConfig.sourceConfigFileName} not found`)
        return
    }
    const context = {
        componentName,
        sourceConfig,
        sourceConfigPath,
        packageName,
        cliConfig,
    }
    const componentPath = await getComponentPath(context)
    if (!componentPath) {
        console.log(`Component ${componentName} not found`)
        return
    }
    const { paths, absoluteBaseUrl } = loadConfig(path.dirname(componentPath))
    const matchPath = createMatchPath(absoluteBaseUrl, paths)

    register({
        baseUrl: absoluteBaseUrl,
        paths,
    })

    function matchPathWithExtentions(importPath) {
        return [importPath, ...fileExtensions.map((ext) => importPath + ext)].find((pathWithExt) => matchPath(pathWithExt))
    }

    function resolveAlias(importPath) {
        const match = matchPathWithExtentions(importPath, paths)
        return match ? require.resolve(match) : null
    }

    function findDependencies(filePath, dependencies = new Set()) {
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest)
        ts.forEachChild(sourceFile, (node) => {
            if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
                const importPath = node.moduleSpecifier.text
                let dependencyPath = resolveAlias(importPath)

                if (!dependencyPath) {
                    try {
                        const pathToResolve = path.resolve(path.dirname(filePath), importPath)

                        dependencyPath = require.resolve(pathToResolve)
                    } catch (error) {}
                }

                if (dependencyPath && !dependencies.has(dependencyPath)) {
                    dependencies.add(dependencyPath)
                    findDependencies(dependencyPath, dependencies)
                }
            }
        })

        return dependencies
    }

    const dependencies = new Set()
    dependencies.add(componentPath)
    findDependencies(componentPath, dependencies)
    const componentsPath = path.resolve(sourceConfigPath, '..', sourceConfig[packageName].paths.components)
    const tokensPath = path.resolve(sourceConfigPath, '..', sourceConfig[packageName].paths.tokens)
    const utilsPath = path.resolve(sourceConfigPath, '..', sourceConfig[packageName].paths.utils)

    const { config: targetConfig, configPath: targetConfigPath } = await loadTargetConfig({ cliConfig })

    if (targetConfig.tsconfigPath) process.env.TS_NODE_PROJECT = path.resolve(process.cwd(), targetConfig.tsconfigPath)
    const { paths: targetPaths, absoluteBaseUrl: targetAbsoluteBaseUrl } = loadConfig(process.cwd())
    if (process.env.TS_NODE_PROJECT) delete process.env.TS_NODE_PROJECT

    const componentFolders = Array.from(dependencies)
        .filter((dep) => dep.startsWith(componentsPath))
        .filter((dep) => dep.includes('index'))
        .map((dep) =>
            dep
                .replace(componentsPath, '')
                .split(path.sep)
                .filter((name) => !name.includes('index'))
                .join(path.sep)
        )

    console.log('Components:')
    await Promise.all(
        componentFolders.map((folder) => {
            const targetFolder = path.join(targetAbsoluteBaseUrl, resolvePath(targetConfig.aliases.components, targetPaths), folder)
            console.log('--', folder || path.sep, '>', targetFolder)
            return new Promise((resolve) => copy(path.join(componentsPath, folder, '/*'), targetFolder, { overwrite: false }, resolve))
        })
    )

    console.log('Utils:')
    await Promise.all(
        Array.from(dependencies)
            .filter((dep) => dep.startsWith(utilsPath))
            .map((file) => {
                const targetFolder = path.join(targetAbsoluteBaseUrl, resolvePath(targetConfig.aliases.utils, targetPaths))
                console.log('--', file.replace(utilsPath, ''), '>', path.join(targetFolder, path.basename(file)))
                return new Promise((resolve) =>
                    copy.one(
                        file,
                        targetFolder,
                        {
                            overwrite: false,
                            flatten: true,
                        },
                        resolve
                    )
                )
            })
    )

    console.log('Tokens:')
    await Promise.all(
        Array.from(dependencies)
            .filter((dep) => dep.startsWith(tokensPath))
            .map((file) => {
                const targetFolder = path.join(targetAbsoluteBaseUrl, resolvePath(targetConfig.aliases.tokens, targetPaths))
                console.log('--', file.replace(tokensPath, ''), '>', path.join(targetFolder, path.basename(file)))
                return new Promise((resolve) =>
                    copy.one(
                        file,
                        targetFolder,
                        {
                            overwrite: false,
                            flatten: true,
                        },
                        resolve
                    )
                )
            })
    )

    const files = [
        path.join(targetAbsoluteBaseUrl, resolvePath(targetConfig.aliases.components, targetPaths), '**', '*').replace(/\\/g, '/'),
        path.join(targetAbsoluteBaseUrl, resolvePath(targetConfig.aliases.utils, targetPaths), '**', '*').replace(/\\/g, '/'),
        path.join(targetAbsoluteBaseUrl, resolvePath(targetConfig.aliases.tokens, targetPaths), '**', '*').replace(/\\/g, '/'),
    ]

    for (const [key, alias] of Object.entries(sourceConfig[packageName].aliases)) {
        console.time(key)
        await replaceInFiles({
            files: files,
            from: new RegExp(alias, 'g'),
            to: targetConfig.aliases[key],
        })
        console.timeEnd(key)
    }
}

module.exports = { add }
