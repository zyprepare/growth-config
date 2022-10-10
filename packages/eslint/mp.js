/**
 * 小程序端 eslint 规则
 */

const defaultConfig = require.resolve('./index')

const baseRules = [
  './rules/error',
  './rules/prettier',
  './rules/react',
  './rules/react-hooks',
  './rules/style',
  './rules/variables',
  './rules/type'
].map(require.resolve)

module.exports = {
  extends: [
    defaultConfig,
    ...baseRules,
    'taro/react',
    'plugin:jsx-a11y/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y']
}
