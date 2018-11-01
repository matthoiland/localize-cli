const ora = require('ora')
const error = require('./../utils/error')

module.exports = async (args) => {

  const spinner = ora().start()
  spinner.text = 'Translating'


  await setTimeout(() => {
    spinner.stop()
    return error('Dude', true)
    // return console.log(`Translated!`)
  }, 2000)
}