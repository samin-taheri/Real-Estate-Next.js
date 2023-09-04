// i18n.js
const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["es", "fr"], // Add other languages here
  defaultNS: "common",
  detection: {
    order: ["cookie", "localStorage", "navigator"],
    caches: ["cookie", "localStorage"],
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
});
