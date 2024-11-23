/* eslint-disable no-undef */
// https://tailwindcss.com/docs/content-configuration
module.exports = {
  content: [
    '../../content/**/*.md',
    './layouts/**/*.html',
  ],
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms')({strategy: 'class'}),
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'ui-badge-tip-wrap',
    'ui-badge-indigo-wrap',
  ],
};
