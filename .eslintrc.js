module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react-native', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'no-empty': 'off',
    'react/no-unused-state': 'off',
    'no-restricted-syntax': 'off',
    'react/button-has-type': 'off',
    'react/forbid-prop-types': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 'off'
  },
  env: {
    jest: true,
    browser: true,
    'react-native/react-native': true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
