const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended" // Ensures ESLint works with Prettier
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  globals: {
    ...globals.browser,
    ...globals.node,
  },
  rules: {
  },
};
