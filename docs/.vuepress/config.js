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
    theme: "reco",
    plugins: [
        ['vuepress-plugin-code-copy', true]
    ],
    head: [
        [
            'link', {
                rel: 'icon',
                href: '/favicon.ico'
            }
        ]
    ],
    themeConfig: {
        // 侧边栏主题深度
        sidebarDepth: 2,
        // vuepress-theme-reco 1.6 版本 将明细目录变为子侧边栏
        subSidebar: 'auto',
        // 最后更新时间
        lastUpdated: '更新日期',
        nav: [{
                text: "首页",
                link: "/"
            },
            {
                text: "DLLZ 的博客",
                items: [{
                    text: "掘金",
                    link: "https://juejin.cn/user/2911162523196125/posts"
                }, ]
            }
        ],
        sidebar
    }
}