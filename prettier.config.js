/* eslint-disable no-undef */
module.exports = {
  attributeGroups: ['$CODE_GUIDE'],
  attributeSort: 'ASC',
  bracketSameLine: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  goTemplateBracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  plugins: [
    'prettier-plugin-organize-attributes',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 10000,
  proseWrap: 'preserve',
  overrides: [
    {
      files: ['*.html'],
      options: {parser: 'go-template'},
    },
  ],
  tailwindConfig: './tailwind.config.js',
  tailwindStylesheet: './assets/css/_tailwind.css',
};
