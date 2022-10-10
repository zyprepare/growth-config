/**
 * react 代码规则
 * https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
 */

module.exports = {
  rules: {
    // 修复 React 被误报为未使用的变量的问题（仅在开启 no-unused-vars 时有效）
    "react/jsx-uses-react": "off",
    // 防止在使用JSX时丢失 React
    "react/react-in-jsx-scope": "off",
    // 禁止组件缺少 prop 类型验证：关闭规则
    'react/prop-types': 0,
    // 禁止将 children 作为一个 prop：关闭规则
    'react/no-children-prop': 0
  }
}
