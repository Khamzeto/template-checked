const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeDetection: true,
  },
  localePath: path.resolve('./public/locales'),
};
