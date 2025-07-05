import ts from 'typescript-eslint'
import { config as baseConfig } from '@repo/eslint-config'

export default ts.config(...baseConfig)
