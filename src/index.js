const minimist = require('minimist')
const config = require('./../localize.cli.js')

module.exports = () => {

  const args = minimist(process.argv.slice(2))

  console.log(args)
}