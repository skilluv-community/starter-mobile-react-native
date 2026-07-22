const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('eslint-config-expo'),
  prettier,
  {
    ignores: [
      'dist/',
      '.expo/',
      'node_modules/',
      'babel.config.js',
      'metro.config.js',
      'tailwind.config.js',
      'eslint.config.js',
    ],
  },
];
