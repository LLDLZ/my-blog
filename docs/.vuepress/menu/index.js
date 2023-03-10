const cmderMenu = require('./issue/cmder')

const vuepressMenu = require('./issue/vuepress')

const vue2CodeAnalysis = require('./blog/vue2CodeAnalysis')

const mac = require('./issue/mac')

const git = require('./blog/git')

const node = require('./blog/node')

const linux = require('./blog/linux')



module.exports = [
    {
        title: '搭建个人博客',
        collapsable: true,
        children: [
            {
                title: '手把手教你用 VuePress + GitHub Pages 搭建个人博客',
                path: '/blog/buildBlog/1',
            }
        ]
    },
    {
        title: 'Vue2.x 源码解析',
        collapsable: true,
        children: vue2CodeAnalysis
    },
    {
        title: 'Git',
        collapsable: true,
        children: git
    },
    {
        title: 'Node',
        collapsable: true,
        children: node
    },
    {
        title: 'Linux',
        collapsable: true,
        children: linux
    },
    {
        title: "问题",
        // 是否折叠
        collapsable: true,
        children: [
            {
                title: "Vuepress 相关",
                collapsable: true,
                children: vuepressMenu
            },
            {
                title: "cmder 相关",
                children: cmderMenu
            },
            {
                title: "mac 相关",
                children: mac
            },
        ],
    },
]