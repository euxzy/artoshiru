/* eslint-disable @typescript-eslint/no-require-imports */
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const { expoEslint: expoConfig } = require('@repo/eslint-config')

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
])
