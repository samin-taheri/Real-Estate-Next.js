// next-i18next.config.js

const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"], // Add all the locales you need
  },
  localePath: path.resolve("./public/locales"), // Path to your translation files
};