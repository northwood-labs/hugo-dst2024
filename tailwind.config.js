/* eslint-disable no-undef */
// https://tailwindcss.com/docs/content-configuration
module.exports = {
  content: [
    '../../content/**/*.md',
    './layouts/**/*.html',
    './assets/js/*.js',
    './assets/css/*.css',
  ],
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms')({strategy: 'class'}),
  ],
  // safelist: [
  //   'ui-badge-tip-wrap',
  //   'ui-badge-indigo-wrap',
  // ],
  theme: {
    extend: {
      animation: {
        'back-out-right': 'back-out-right 1s 1',
        'flip-in-x': 'flip-in-x 1s 1',
      },
      keyframes: {
        'back-out-right': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0)',
            opacity: '0',
          },
        },
        'flip-in-x': {
          from: {
            transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
            'animation-timing-function': 'ease-in',
            opacity: '0',
          },
          '40%': {
            transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
            'animation-timing-function': 'ease-in',
          },
          '60%': {
            transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
            opacity: '1',
          },
          '80%': {transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)'},
          to: {transform: 'perspective(400px)'},
        },
      },
    },
  },
};
