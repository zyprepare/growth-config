/**
 * 小程序端 stylelint 规则
 */

const defaultConfig = require.resolve('./index')

module.exports = {
  extends: [defaultConfig],
  rules: {
    // 允许使用rpx作为单位
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 允许类型 page
    'selector-type-no-unknown': [true, { ignoreTypes: ['page'] }],
    // 大小写单位都允许 EM: PX
    'unit-case': [null]
  }
}
