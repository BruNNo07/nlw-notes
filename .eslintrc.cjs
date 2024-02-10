module.exports = {
  root: true,
  extends: [
    '@rocketseat/eslint-config/react',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
}
