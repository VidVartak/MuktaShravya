const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer:{
    proxy:{
      '/api':{
        target: 'http://localhost:5000'
      }

    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
