const path = require('path')
const fs = require('fs')
const config = require(path.resolve('./localize.cli.js'))
const error = require('./../utils/error')

module.exports = async ({ key = '', translations = {} }) => {

  // Look up locales.js from filesystem
  let locales_file
  try {
    locales_file = require(path.resolve(config.output))
  } catch (err) {
    locales_file = {}
  }

  // Loop over translations
  for (let locale in translations) {

    // Update key with locale
    const locale_key = `${locale}.${key}`

    // Magik deep nested wizardry from:
    // https://stackoverflow.com/a/44168870/922593
    const keys = locale_key.split('.')
    const last = keys.pop()
    keys.reduce((o,k) => { return o[k] = o[k] || {}; }, locales_file)[last] = translations[locale];
  }

  // Write locales.js back to filesystem
  try {
    const fileString = `module.exports = ${JSON.stringify(locales_file, null, 2)}`
    fs.writeFileSync(path.resolve(config.output), fileString)
  } catch (err) {
    return error(err, true)
  }
  
  // Return all good
  return Promise.resolve('success')
}