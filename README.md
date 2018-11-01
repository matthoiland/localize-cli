# Localize CLI
CLI tool for translating strings and generating i18n files using the Google Translate API.

### Installation

```bash
npm install --save localize-cli
```

### Configuration

Create a config file in your root directory called `localize.cli.js` with the following:

```javascript
export default {
  
  locales: ['en', 'ja'],

  output: './locales.json',

  google_api_key: 'YOUR_GOOGLE_API_KEY'
}
```

### Usage

Typing this command in your terminal...

```bash
localize base.hello "Hello world"
```

... will generate a `locales.json` file like this:

```json
{
  "en": {
    "base": {
      "hello": "Hello World"
    }
  },
  "ja": {
    "base": {
      "hello": "こんにちは世界"
    }
  }
}
```

### TODO

* [ ] Allow config to exist in `package.json` or as CLI params
* [ ] Option to break each locale into separate `json` files
* [ ] Re-listen to Vespertine by Björk