const rules = require('./rules')
console.log(require('eslint-config-growth-test'))

module.exports = {
  extends: [...rules, 'stylelint-config-standard', 'stylelint-config-recommended-scss'],
  ignoreFiles: ['./**/*.js', './**/*.ts', './**/*.css', './node_modules/**/*']
}
