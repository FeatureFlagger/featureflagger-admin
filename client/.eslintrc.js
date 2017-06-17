module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember-suave/no-const-outside-module-scope': 0,
    'prefer-const': 2
  },
  globals: {
    validator: false,
    moment: false,
  }
};
