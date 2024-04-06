#!/usr/bin/env node

const fs = require('fs')
const ts = require('typescript')
const path = require('path')
const {walk} = require("@root/walk")
const {createMatchPath, register, loadConfig} = require('tsconfig-paths')
const {resolve} = require('path')
const pristineCliConfig = require('../pristine-cli.config.json')

const defaultPackage = 'react'

const package = defaultPackage

const crawl = (dir, crawlFunc) => {
    const resolvedDir = path.resolve(dir)
    return new Promise((resolve) => {
        let files = []
        let error = null
        try {
            files = fs.readdirSync(resolvedDir)
        } catch (err) {
            error = err
        }
        return crawlFunc(error, resolvedDir, files)
            .then((done) => {
                if (done) return resolve(true)
                const parentDir = path.resolve(dir, '..')
                if (parentDir === resolvedDir) return resolve(true)
                return crawl(parentDir, crawlFunc)
            })
            .then((done) => resolve(done))
    })
}

function main() {
    const componentName = process.argv[2];
    let componentPath = '';
    let pristineSourceConfig;

    if (!componentName) {
        console.log('Usage: pristine <component_name>');
        return;
    }

    const exclude = ['node_modules', '.git', '.idea', '.vscode', 'dist', 'build', 'coverage', 'public', 'static', 'tmp', 'temp', 'logs', 'logs', 'log']

    function walkFunc(err, pathname, dirent) {
        if (err) {
            console.warn("fs stat error for %s: %s", pathname, err.message);
            return Promise.resolve();
        }
        if (exclude.includes(dirent.name)) return Promise.resolve();
        if (dirent.isDirectory() && dirent.name === componentName) {
            componentPath = path.resolve(pathname, 'index.ts');
        }

        return Promise.resolve();
    }

    function crawlFunc(err, dir, files) {
        if (files.includes(pristineCliConfig.sourceConfigFileName)) {
            pristineSourceConfig = require(path.resolve(dir, pristineCliConfig.sourceConfigFileName));
            return Promise.resolve(true);
        }
        return Promise.resolve();
    }

    crawl(__dirname, crawlFunc)
        .then(() => walk(pristineSourceConfig[package].paths.components, walkFunc))
        .then(() => {
            if (!pristineSourceConfig) {
                const modulePath = require.resolve(pristineCliConfig.packages[package])
                if (fs.existsSync(modulePath)) {
                    pristineSourceConfig = require(path.resolve(modulePath, pristineCliConfig.sourceConfigFileName));
                }
            }
            return Promise.resolve();
        })
        .then(function () {
            if (!pristineSourceConfig) {
                console.log('pristine.source.config.json not found');
                return;
            }
            const {paths, absoluteBaseUrl} = loadConfig(path.dirname(componentPath));
            const matchPath = createMatchPath(absoluteBaseUrl, paths);
            const fileExtensions = ['.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js', '/index.jsx'];

            register({
                baseUrl: absoluteBaseUrl,
                paths,
            })

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
        })

}

main();
