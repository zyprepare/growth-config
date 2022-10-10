const rules = require('./rules')

module.exports = {
  extends: [...rules, 'stylelint-config-standard', 'stylelint-config-recommended-scss'],
  ignoreFiles: ['./**/*.js', './**/*.ts', './**/*.css', './node_modules/**/*']
}
