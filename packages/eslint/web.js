/**
 * web端 eslint 规则
 */

const defaultConfig = require.resolve('./index')

const baseRules = [
  './rules/error',
  './rules/prettier',
  './rules/react',
  './rules/react-hooks',
  './rules/style',
  './rules/variables',
].map(require.resolve)

module.exports = {
  extends: [
    defaultConfig,
    ...baseRules,
    'standard'
  ],
  rules: {
    'space-before-function-paren': 0,
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    __DEV__: 'readonly'
  }
}
