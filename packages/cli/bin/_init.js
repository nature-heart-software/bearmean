const prompts = require('prompts')
const path = require('path')
const fs = require('node:fs')

async function init({ cliConfigPath }) {
    const cliConfig = require(path.resolve(process.cwd(), cliConfigPath))
    const { tsconfigPath, components, utils, tokens } = await prompts([
        {
            type: 'text',
            name: 'tsconfigPath',
            message: 'tsconfig path',
            initial: './tsconfig.json',
        },
        {
            type: 'text',
            name: 'components',
            message: 'Components path',
            initial: '@/components',
        },
        {
            type: 'text',
            name: 'utils',
            message: 'Utils path',
            initial: '@/utils',
        },
        {
            type: 'text',
            name: 'tokens',
            message: 'Tokens path',
            initial: '@/tokens',
        },
    ])
    fs.writeFileSync(
        path.resolve(process.cwd(), cliConfig.targetConfigFileName),
        JSON.stringify(
            {
                tsconfigPath,
                aliases: {
                    components,
                    utils,
                    tokens,
                },
            },
            null,
            2
        )
    )
}

module.exports = { init }
