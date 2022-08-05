export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // "prettier/prettier": "error",
    'import/no-unresolved': 'off',
    'template-curly-spacing': 'off',
    'react/react-in-jsx-scope': ['off'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    'react/prop-types': ['error'],
    'no-var': ['error'],
    camelcase: ['off'],
    'comma-dangle': ['off'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'space-before-function-paren': ['off'],
    indent: ['off'],
    'react/self-closing-comp': 'error',
    // "sort-keys": ["error", "asc", { "caseSensitive": true, "natural": false, "minKeys": 2 }]
  },
}
