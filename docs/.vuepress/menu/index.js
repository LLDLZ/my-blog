const cmderMenu = require('./issue/cmder')

const vuepressMenu = require('./issue/vuepress')

const vue2CodeAnalysis = require('./blog/vue2CodeAnalysis')

const mac = require('./issue/mac')

const git = require('./blog/git')

const node = require('./blog/node')

const linux = require('./blog/linux')

const vueRouterCodeAnalysis = require('./blog/vueRouterCodeAnalysis')

const vuexCodeAnalysis = require('./blog/vuexCodeAnalysis')

const writeAccordingPromiseA = require('./blog/writeAccordingPromiseA+')

const notes = require('./blog/notes')

const webglNotes = require('./blog/webglNotes')

const mysql = require('./blog/mysql')

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
        title: '日常记录',
        collapsable: true,
        children: notes
    },
    {
        title: 'Vue 2.x 源码解析',
        collapsable: true,
        children: vue2CodeAnalysis
    },
    {
        title: 'VueRouter 3.6.3 源码解析',
        collapsable: true,
        children: vueRouterCodeAnalysis
    },
    {
        title: 'Vuex 3.6.2 源码解析',
        collapsable: true,
        children: vuexCodeAnalysis
    },
    {
        title: '依据 PromiseA+ 写 promise',
        collapsable: true,
        children: writeAccordingPromiseA
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
        title: 'Webgl',
        collapsable: true,
        children: webglNotes
    },
    {
        title: 'Mysql及Sql语句',
        collapsable: true,
        children: mysql
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