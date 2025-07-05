import ts from 'typescript-eslint'
import { includeIgnoreFile } from '@eslint/compat'
import { svelteEslint } from '@artoshiru/eslint-config'
import { fileURLToPath } from 'node:url'
import svelteConfig from './svelte.config.js'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default ts.config(includeIgnoreFile(gitignorePath), ...svelteEslint, {
  files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
  languageOptions: {
    parserOptions: {
      projectService: true,
      extraFileExtensions: ['.svelte'],
      parser: ts.parser,
      svelteConfig,
    },
  },
})
