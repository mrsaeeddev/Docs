module.exports = {
    title: 'OpShit',
    description: 'Customizing NodeJS Framework',
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Docs', link: '/docs/' },
            { text: 'GitLeaf', link: 'https://gitleaf.com' }
        ],
    },
    plugins: ['@vuepress/back-to-top']
}