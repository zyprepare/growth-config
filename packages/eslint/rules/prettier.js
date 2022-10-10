/**
 * prettier 风格
 */

module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100,
        trailingComma: 'none'
      }
    ]
  }
}
