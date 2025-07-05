import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import ts from 'typescript-eslint'
import expoConfig from 'eslint-config-expo/flat.js'
import { config as baseConfig } from './base.js'

export const expoEslint = ts.config(
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  expoConfig,
  {
    ignores: ['dist/**'],
  },
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: { ...globals.serviceworker, ...globals.node },
    },
    rules: { 'no-undef': 'off' },
  }
)
