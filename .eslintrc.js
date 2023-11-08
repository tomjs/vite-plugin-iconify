module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/typescript')],
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [require.resolve('@tomjs/eslint/vue/typescript')],
    },
    {
      files: ['**/*.tsx'],
      extends: [require.resolve('@tomjs/eslint/react/typescript')],
    },
  ],
};
