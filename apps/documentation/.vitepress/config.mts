import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/bearmean/',
    outDir: '../../docs',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    title: 'bearmean',
    description: 'bearmean desc',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Docs', link: '/docs' },
            { text: 'Components', link: '/components' },
            { text: 'Patterns', link: '/patterns' },
            { text: 'CLI', link: '/cli' },
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    { text: 'Introduction', link: '/docs/' },
                    { text: 'Installation', link: '/docs/installation/' },
                ],
            },
            {
                text: 'Components',
                link: '/components/',
                items: [
                    {
                        text: 'Debug',
                        items: [
                            {
                                text: 'RenderState',
                                link: '/components/layout/aspect/',
                            },
                        ],
                    },
                    {
                        text: 'Layout',
                        items: [
                            {
                                text: 'Aspect',
                                link: '/components/layout/aspect/',
                            },
                            {
                                text: 'Box',
                                link: '/components/layout/box/',
                            },
                            {
                                text: 'Center',
                                link: '/components/layout/center/',
                            },
                            {
                                text: 'Container',
                                link: '/components/layout/container/',
                            },
                            {
                                text: 'Divider',
                                link: '/components/layout/divider/',
                            },
                            {
                                text: 'Grid',
                                link: '/components/layout/grid/',
                            },
                            {
                                text: 'Group',
                                link: '/components/layout/group/',
                            },
                            {
                                text: 'Position',
                                link: '/components/layout/position/',
                            },
                            {
                                text: 'Stack',
                                link: '/components/layout/stack/',
                            },
                            {
                                text: 'Transform',
                                link: '/components/layout/transform/',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Patterns',
                items: [
                    { text: 'Define Props', link: '/patterns/' },
                ],
            },
            {
                text: 'CLI',
                items: [
                    { text: 'Options', link: '/cli/' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/nature-heart-software/bearmean' },
        ],
    },
})
