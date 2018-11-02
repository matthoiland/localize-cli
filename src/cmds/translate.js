const ora = require('ora')
const path = require('path')
const config = require(path.resolve('./localize.cli.js'))
const jsonbuilder = require('./jsonbuilder')
const error = require('./../utils/error')
const { Translate } = require('@google-cloud/translate')

module.exports = async (args) => {

  // Configure Google Translate SDK
  const projectId = config.google_cloud_project_id
  const translate = new Translate({ projectId: projectId })

  // Show spinner
  const spinner = ora().start()
  spinner.text = 'Translating'

  // Define text, locales, and key
  const key = args[0]
  const text = args[1]
  const locales = config.locales

  // Do some translating
  const translations = {}
  await Promise.all(locales.map(async locale => {
    const translation = await translate.translate(text, locale)
    translations[locale] = translation[0]
  }))

  // Update JSON file
  try {
    await jsonbuilder({ key, translations })
  } catch (err) {
    return error(err, true)
  }

  // All done!
  spinner.stop()
  console.log('Translation complete.')
  console.log(translations)
}