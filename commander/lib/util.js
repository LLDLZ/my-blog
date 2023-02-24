const chalk = require('chalk')


const log = content => console.log(chalk.blue(content))

const err = content => console.log(chalk.red(content))

const warn = content => console.log(chalk.yellow(content))

const success = content => console.log(chalk.green(content))

module.exports = {
    log, err, warn, success
}

