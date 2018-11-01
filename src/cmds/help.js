const chalk = require('chalk')

const menus = {
  main: `
    ${chalk.green('Example:')}
    localize base.hello "Hello world"

    ${chalk.green('Parameters:')}
    localize [json_key] [string]

    ${chalk.green('Commands:')}
    remove ............. remove translation by json key
    version ............ show package version
    help ............... show help menu for a command`,

  remove: `
    ${chalk.green('Example:')}
    localize remove base.hello

    ${chalk.green('Parameters:')}
    localize remove [json_key]`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}