const sidebar = require('./menu/index')

const env = (process.env.NODE_ENV).trim();
let bundleObj = {}

if (env === 'development') {
    bundleObj.dest = '.dist'
}
if (env === 'production') {
    bundleObj.base = '/my-blog/'
}

module.exports = {
    title: 'DLLZ的博客',
    description: 'DLLZ的博客',
    // base: "/my-blog/",
    // dest: './dist',
    ...bundleObj,
    plugins: [['vuepress-plugin-code-copy', true]],
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.ico' }
        ]
    ],
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            {
                text: "DLLZ 的博客",
                items: [
                    { text: "掘金", link: "https://juejin.cn/user/2911162523196125/posts" },
                ]
            }
        ],
        sidebar
    }
}