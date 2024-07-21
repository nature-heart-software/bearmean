const prompts = require('prompts')
const path = require('path')
const fs = require('node:fs')

async function init({ cliConfigPath }) {
    const cliConfig = require(path.resolve(process.cwd(), cliConfigPath))
    const { components, utils, tokens } = await prompts([
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
