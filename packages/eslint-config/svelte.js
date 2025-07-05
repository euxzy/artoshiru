import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import ts from 'typescript-eslint'
import { config as baseConfig } from './base.js'

export const svelteEslint = ts.config(
  ...baseConfig,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: { 'no-undef': 'off' },
  }
)
