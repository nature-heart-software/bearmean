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
                    { text: 'Introduction', link: '/docs' },
                    { text: 'Installation', link: '/docs/installation' },
                ],
            },
            {
                text: 'Components',
                link: '/components',
                items: [
                    {
                        text: 'Layout',
                        items: [
                            {
                                text: 'Aspect',
                                link: '/components/layout/aspect',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Patterns',
                items: [
                    { text: 'Define Props', link: '/docs' },
                ],
            },
            {
                text: 'CLI',
                items: [
                    { text: 'Define Props', link: '/docs' },
                ],
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],
    },
})
