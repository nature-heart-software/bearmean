#!/usr/bin/env node
const path = require('path')
const { program } = require('commander')
const pkg = require('../package.json')
const { add } = require('./_add')
const { init } = require('./_init')

program.name('bearmean').description('Bearmean CLI').version(pkg.version)

program
    .command('add')
    .description('Add a component to your project')
    .argument('<component>', 'Component or component category name')
    .option('-c, --config <path>', 'CLI config path', path.resolve(__dirname, '../bearmean-cli.config.json'))
    .option('-p, --package <name>', 'Package to pick from', 'react')
    .action((componentName, options) => {
        return add({
            componentName,
            packageName: options.package,
            cliConfigPath: options.config,
        })
    })

program
    .command('init')
    .description('Create project configuration')
    .option('-c, --config <path>', 'CLI config path', path.resolve(__dirname, '../bearmean-cli.config.json'))
    .option('-p, --package <name>', 'Package to pick from', 'react')
    .action(async (options) => {
        return init({ cliConfigPath: options.config, tsConfig: options.tsConfig })
    })

program.parse()
