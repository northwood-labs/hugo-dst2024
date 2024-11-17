/* eslint-disable no-undef */
module.exports = {
  content: ['./layouts/**/*.html'],
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms')({strategy: 'class'}),
    require('@tailwindcss/typography'),
  ],
};
