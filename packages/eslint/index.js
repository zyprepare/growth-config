/**
 * 默认的公共配置
 */

module.exports = {
  extends: ['prettier', 'plugin:react/recommended'],
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  plugins: ['react-hooks', 'prettier'],
  ignorePatterns: ['!.*.js']
}
