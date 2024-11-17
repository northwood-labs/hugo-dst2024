/* eslint-disable no-undef */
module.exports = {
  bracketSameLine: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  goTemplateBracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 10000,
  proseWrap: 'preserve',
  overrides: [
    {
      files: ['*.html'],
      options: {parser: 'go-template'},
    },
  ],
};
