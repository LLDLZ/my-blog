#!/usr/bin/env node

const program = require('commander')


program.version(require('../../package').version)


program
    .command('create <name> [otherDirs...]')
    .description('init project')
    .option('-c,-create', 'create file')
    .action(
        require('../lib/index')
    )

program.parse(process.argv)

/**
 * bash : blog create blog buildBlog
 * blog 是一级菜单目录
 * buildBlog 是二级菜单目录
 * 依次递归
 */