'use strict';

module.exports = {
  extends: ['@codility/eslint-config-codility'],
  globals: {
    document: true,
    navigator: true,
    fetch: true,
    location: true,
    screen: true,
    performance: true,
    XMLHttpRequest: true,
  },
  parser: 'babel-eslint',

  rules: {
    'no-restricted-properties': [
      1,
      {
        object: 'describe',
        message: 'Please remove .only and .skip after `describe` before commiting',
      },
      {
        object: 'it',
        message: 'Please remove .only and .skip after `it` before commiting',
      },
    ],
    'id-blacklist': [2, 'React'],
  },

  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
    {
      files: ['src/**/*.js', 'src/*.js', 'webpack.config.js'],
      excludedFiles: [],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
