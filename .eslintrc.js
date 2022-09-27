module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'unused-imports', '@typescript-eslint'],
  settings: {
    react: {
      pragma: 'h',
      version: '16.0',
    },
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-empty-function': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'error',
  },
};
