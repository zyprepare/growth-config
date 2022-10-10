/**
 * typescript 规则
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
 */

module.exports = {
  rules: {
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // 禁止变量声明与外层作用域的变量同名
    '@typescript-eslint/no-shadow': 'error'
  }
}
