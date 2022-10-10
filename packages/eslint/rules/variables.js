/**
 * 变量声明
 */

module.exports = {
  rules: {
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off'
  }
}
