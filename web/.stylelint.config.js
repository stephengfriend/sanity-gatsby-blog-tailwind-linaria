module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'apply',
        'nest',
        'responsive',
        'screen',
        'tailwind',
        'variants',
      ]
    }],
  }
}
