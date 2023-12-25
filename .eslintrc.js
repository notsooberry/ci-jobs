module.exports = {
    env: {
      commonjs: true,
      es2021: true,
      node: true,
      'jest/globals': true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 12,
    },
    rules: {
      'no-console': 'off',
    },
    plugins: ['jest', 'node'],
  };  