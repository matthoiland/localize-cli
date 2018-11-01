const minimist = require('minimist')
const path = require('path')
const error = require('./utils/error')

module.exports = () => {

  // Define config
  let config
  try {
    config = require(path.resolve('./localize.cli.js'))
  } catch (err) {
    return error('Missing config "localize.cli.js"', true)
  }

  // Require valid config
  if (!config || !config.google_cloud_project_id) {
    return error('Missing config value "google_cloud_project_id', true)
  }

  // Parse CLI arguments
  const args = minimist(process.argv.slice(2))

  // Define command
  let cmd = args._[0] || 'help'
  if (args.version || args.v) cmd = 'version'
  if (args.help || args.h) cmd = 'help'

  // Run the defined command
  switch (cmd) {
    case 'remove': require('./cmds/remove')(args._); break;
    case 'version': require('./cmds/version')(args); break;
    case 'help': require('./cmds/help')(args); break;
    default: require('./cmds/translate')(args._); break; // Translate it
  }
}