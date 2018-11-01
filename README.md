## IN ACTIVE DEVELOPMENT

# Localize CLI
CLI tool for translating strings and generating i18n files using the Google Translate API.

![Alt text](/src/example.gif?raw=true "Example")

### Installation

```bash
npm install --save localize-cli
```

### Configure Google Translate API

To use this tool you'll need a Google Cloud Platform account to access the Google Translate API. It's not entirely painful to set up – I believe in you!

1. [Create a Google Cloud Platform project](https://console.cloud.google.com/project)
2. [Enable billing](https://support.google.com/cloud/answer/6293499#enable-billing)
3. [Enable the Google Cloud Translation API](https://console.cloud.google.com/flows/enableapi?apiid=translate.googleapis.com)
4. Configure Google Cloud authentication on your local machine
    * [Set up authentication with a service account](https://cloud.google.com/docs/authentication/getting-started)
    * Move that `json` credentials file to somewhere like `~/.google/credentials.json`
    * Update `~/.bash_profile` with `export GOOGLE_APPLICATION_CREDENTIALS=~/.google/credentials.json`
    * Reload bash profile with `source ~/.bash_profile`
    
    * Copy the `project_id` for the next step

### Configure Localize CLI

Create a config file in your root directory called `localize.cli.js` with the following:

```javascript
module.exports = {

  base_locale: 'en',
  
  locales: ['en', 'ja'],

  output: './locales.js',

  google_cloud_project_id: 'MY_GOOGLE_PROJECT_ID'
}
```

### Usage

Typing this command in your terminal...

```bash
localize base.hello "Hello world"
```

... will generate a `locales.js` file like this:

```javascript
module.exports = {
  en: {
    base: {
      hello: "Hello World"
    }
  },
  ja: {
    base: {
      hello: "こんにちは世界"
    }
  }
}
```

### TODO

* [x] Publish to NPM – `npm publish`
* [ ] Command for removing translations by JSON key
* [ ] Allow config to exist in `package.json` or as CLI params
* [ ] Option to break each locale into separate JSON files
* [ ] Re-listen to Vespertine by Björk