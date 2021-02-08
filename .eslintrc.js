module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
