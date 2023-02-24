const { promisify } = require('util')

const figlet = promisify(require('figlet'))

const clear = require('clear')

// const chalk = require('chalk')

const { log } = require('./util')

//进度条
const ora = require('ora');

// const log = content => console.log(chalk.blueBright(content))

module.exports = async (name, dir) => {



    // 打印欢迎画面
    clear()

    const data = await figlet('Welcome Blog Tools')

    log(data)

    // console.log('name', name)
    // console.log('dir', dir)

    const info = {
        targetDirName: name,
        childDirNames: dir
    }


    log('创建中...')

    // const oraProcess = ora('创建完成 ' + name)

    // await require('./handleOld')(info)
    await require('./handle')(info)

    // oraProcess.succeed()
}