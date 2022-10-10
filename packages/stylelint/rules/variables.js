/**
 * 变量声明
 */

module.exports = {
  rules: {
    // 变量后必须添加!default，本地局部变量可以不加
    'scss/dollar-variable-default': [true, { ignore: 'local' }]
  }
}
