module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    process: false,
    require: false,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  settings: {
    react: {
      version: '16.3.1',
    },
  },
  rules: {
    'func-names': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'linebreak-style': [2, 'unix'],
    'max-len': [1, { code: 120, ignoreComments: true }],
    'no-use-before-define': 0,
    'object-curly-newline': [2, { multiline: true }],
    'prefer-promise-reject-errors': 0,
    quotes: [2, 'single'],
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 1,
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
  },
};
