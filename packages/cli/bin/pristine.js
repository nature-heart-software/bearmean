#!/usr/bin/env node

const fs = require('fs')
const ts = require('typescript')
const path = require('path')
const {walk} = require("@root/walk")
const {createMatchPath, register, loadConfig} = require('tsconfig-paths')
const {resolve} = require('path')
const crawl = require('../modules/crawl')
const {
    _,
    p = 'react',
    package: packageName = p,
    c = path.resolve(__dirname, '../pristine-cli.config.json'),
    config: cliConfigPath = c,
} = require('minimist')(process.argv.slice(2));




    const fileExtensions = ['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js', '/index.jsx'];
    const originalRequireResolve = require.resolve;

    require.resolve = (request, options) => {
        for (const extension of fileExtensions) {
            try {
                return originalRequireResolve(resolve(request + extension), options);
            } catch (error) {
            }
        }
        return originalRequireResolve(request, options);
    };

function loadSourceConfig(packageName, cliConfig) {
    return new Promise((resolve) => {
        let config;
        return crawl(__dirname, (err, dir, files) => {
            if (files.includes(cliConfig.sourceConfigFileName)) {
                config = (require(path.resolve(dir, cliConfig.sourceConfigFileName)));
                return Promise.resolve(true);
            }
            return Promise.resolve();
        }).then(() => {
            if (!config) {
                const modulePath = require.resolve(cliConfig.packages[packageName])
                if (fs.existsSync(modulePath)) {
                    resolve(require(path.resolve(modulePath, cliConfig.sourceConfigFileName)));
                }
            } else {
                resolve(config);
            }
        });
    })
}

function getComponentPath({componentName, packageName, sourceConfig}) {
    return new Promise((resolve) => {
        const exclude = ['node_modules', '.git', '.idea', '.vscode', 'dist', 'build', 'coverage', 'public', 'static', 'tmp', 'temp', 'logs', 'logs', 'log']
        return walk(sourceConfig[packageName].paths.components, (err, pathname, dirent) => {
            if (err) {
                console.warn("fs stat error for %s: %s", pathname, err.message);
                return Promise.resolve();
            }
            if (exclude.includes(dirent.name)) return Promise.resolve();
            if (dirent.isDirectory() && dirent.name === componentName) {
                resolve(path.resolve(pathname, 'index.ts'));
            }

            return Promise.resolve();
        })
    })
}

async function pristine() {
    const action = _[0];
    const componentName = _[1];
    const cliConfig = require(path.resolve(process.cwd(), cliConfigPath))
    if (!componentName) {
        console.log(`Usage: ${cliConfig.commandName} <action> <component_name>`);
        return;
    }
    const sourceConfig = await loadSourceConfig(packageName, cliConfig);
    if (!sourceConfig) {
        console.log(`${cliConfig.sourceConfigFileName} not found`);
        return;
    }
    const context = {
        componentName,
        sourceConfig,
        packageName,
    }
    const componentPath = await getComponentPath(context);
    if (!componentPath) {
        console.log(`Component ${componentName} not found`);
        return;
    }
    const {paths, absoluteBaseUrl} = loadConfig(path.dirname(componentPath));
    const matchPath = createMatchPath(absoluteBaseUrl, paths);

    register({
        baseUrl: absoluteBaseUrl,
        paths,
    })

    function matchPathWithExtentions(importPath) {
        return [
            importPath,
            ...fileExtensions.map((ext) => importPath + ext),
        ].find((pathWithExt) => matchPath(pathWithExt));
    }

    function resolveAlias(importPath) {
        const match = matchPathWithExtentions(importPath, paths);
        return match ? require.resolve(match) : null;
    }

    function findDependencies(filePath, dependencies = new Set()) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest);
        ts.forEachChild(sourceFile, node => {
            if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) {
                const importPath = node.moduleSpecifier.text;
                let dependencyPath = resolveAlias(importPath);

                if (!dependencyPath) {
                    try {
                        const pathToResolve = path.resolve(path.dirname(filePath), importPath);

                        dependencyPath = require.resolve(pathToResolve);
                    } catch (error) {
                    }
                }

                if (dependencyPath && !dependencies.has(dependencyPath)) {
                    dependencies.add(dependencyPath);
                    findDependencies(dependencyPath, dependencies);
                }
            }
        });

        return dependencies;
    }

    const dependencies = new Set();
    dependencies.add(componentPath);
    findDependencies(componentPath, dependencies);
    console.log('File dependencies:');
    dependencies.forEach(dep => console.log(dep));
}

pristine();
