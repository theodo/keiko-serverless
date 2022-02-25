module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ],
  rules: {
    'declaration-no-important': true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      customSyntax: '@stylelint/postcss-css-in-js',
      rules: {
        // allow mui usage in css-in-js
        'property-no-unknown': [true, { ignoreProperties: ['name'] }],
        'value-keyword-case': ['lower', { ignoreProperties: ['name'] }],
        'selector-class-pattern': [/Mui\w+/],
        // prevent errors on styled-components props functions
        'value-keyword-case': null,
        'function-name-case': null,
      },
    },
  ],
};
