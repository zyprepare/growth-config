const colorRule = require.resolve('./color')
const declarationRule = require.resolve('./declaration')
const propertyRule = require.resolve('./property')
const valueRule = require.resolve('./value')
const selectorRule = require.resolve('./selector')
const variablesRule = require.resolve('./variables')

module.exports = [
  colorRule,
  declarationRule,
  propertyRule,
  valueRule,
  selectorRule,
  variablesRule
]
