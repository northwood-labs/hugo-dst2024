import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url),
  __dirname = path.dirname(__filename),
  compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
  }),
  COMPLEXITY_SCORE = 30,
  INDENT_SPACES = 2,
  MAX_LINE_LENGTH = 200,
  SPACE_UNARY_OPS = 2;

export default [
  ...compat.extends('eslint:recommended'),
  {
    // https://github.com/jsx-eslint/eslint-plugin-react#configuration-new-eslintconfigjs
    plugins: {
      react: react,
      '@stylistic': stylistic,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true }},
      globals: {
        ...globals.browser,
        ...Object.fromEntries(
          Object.entries(globals.node).map(
            ([key]) => [
              key,
              'off',
            ],
          ),
        ),
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      /** **********************************************************************/
      // BUILT-IN

      'arrow-body-style': [
        'error',
        'as-needed',
      ],
      'block-scoped-var': ['error'],
      camelcase: [
        'error',
        {
          ignoreDestructuring: true,
          properties: 'always',
        },
      ],
      'capitalized-comments': [
        'error',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: false,
          ignorePattern: 'pragma|ignored',
        },
      ],
      complexity: [
        'error',
        COMPLEXITY_SCORE,
      ],
      'consistent-return': [
        'error',
        { treatUndefinedAsUnspecified: true },
      ],
      'consistent-this': [
        'error',
        'self',
      ],
      curly: ['error'],
      'default-case': [
        'error',
        { commentPattern: '^skip\\sdefault' },
      ],
      'default-case-last': ['error'],
      'default-param-last': ['error'],
      eqeqeq: [
        'error',
        'smart',
      ],
      'guard-for-in': ['error'],
      'multiline-comment-style': [
        'error',
        'bare-block',
      ],
      'new-cap': [
        'error',
        {
          newIsCap: true,
          properties: false,
        },
      ],
      'no-alert': ['error'],
      'no-confusing-arrow': [
        'error',
        { allowParens: true },
      ],
      'no-console': [
        'error',
        { allow: ['warn']},
      ],
      'no-else-return': [
        'error',
        { allowElseIf: false },
      ],
      'no-empty': [
        'error',
        { allowEmptyCatch: true },
      ],
      'no-empty-function': ['error'],
      'no-eq-null': ['error'],
      'no-eval': [
        'error',
        { allowIndirect: true },
      ],
      'no-extend-native': ['error'],
      'no-extra-bind': ['error'],
      'no-extra-label': ['error'],
      'no-implicit-coercion': [
        'error',
        { disallowTemplateShorthand: false },
      ],
      'no-implied-eval': ['error'],
      'no-invalid-this': ['error'],
      'no-label-var': ['error'],
      'no-lone-blocks': ['error'],
      'no-lonely-if': ['error'],
      'no-loop-func': ['error'],
      'no-magic-numbers': [
        'error',
        {
          detectObjects: false,
          enforceConst: true,
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignore: [
            0,
            1,
          ],
        },
      ],
      'no-mixed-operators': ['error'],
      'no-new-func': ['error'],
      'no-new-object': ['error'],
      'no-new-wrappers': ['error'],
      'no-octal-escape': ['error'],
      'no-proto': ['error'],
      'no-return-assign': [
        'error',
        'except-parens',
      ],
      'no-return-await': ['error'],
      'no-script-url': ['error'],
      'no-sequences': ['error'],
      'no-shadow': [
        'error',
        { hoist: 'all' },
      ],
      'no-throw-literal': ['error'],
      'no-undef-init': ['error'],
      'no-undefined': ['error'],
      'no-unneeded-ternary': ['error'],
      'no-unused-expressions': [
        'error',
        { allowShortCircuit: true },
      ],
      'no-useless-call': ['error'],
      'no-useless-computed-key': ['error'],
      'no-useless-concat': ['error'],
      'no-useless-constructor': ['error'],
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      'no-useless-return': ['error'],
      'no-var': ['error'],
      'no-void': ['error'],
      'object-shorthand': [
        'error',
        'never',
      ],
      'one-var': [
        'error',
        'consecutive',
      ],
      'operator-assignment': [
        'error',
        'always',
      ],
      'prefer-arrow-callback': ['error'],
      'prefer-const': ['error'],
      'prefer-destructuring': [
        'error',
        {
          object: false,
          array: false,
        },
      ],
      'prefer-exponentiation-operator': ['error'],
      'prefer-numeric-literals': ['error'],
      'prefer-object-spread': ['error'],
      'prefer-promise-reject-errors': ['error'],
      'prefer-regex-literals': ['error'],
      'prefer-rest-params': ['error'],
      'prefer-spread': ['error'],
      'prefer-template': ['error'],
      'quote-props': [
        'error',
        'as-needed',
      ],
      radix: ['error'],
      'require-await': ['error'],
      'require-unicode-regexp': ['error'],

      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: [
            'all',
            'single',
            'multiple',
            'none',
          ],
          allowSeparatedGroups: false,
        },
      ],
      'spaced-comment': [
        'error',
        'always',
      ],
      strict: [
        'error',
        'global',
      ],
      'symbol-description': ['error'],
      'vars-on-top': ['error'],
      'unicode-bom': [
        'error',
        'never',
      ],

      /** **********************************************************************/
      // STYLISTIC

      '@stylistic/array-bracket-newline': [
        'error',
        { multiline: true },
      ],
      '@stylistic/array-bracket-spacing': [
        'error',
        'never',
      ],
      '@stylistic/array-element-newline': [
        'error',
        {
          multiline: true,
          minItems: 2,
        },
      ],
      '@stylistic/arrow-parens': [
        'error',
        'as-needed',
        { requireForBlockBody: true },
      ],
      '@stylistic/arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      '@stylistic/block-spacing': [
        'error',
        'always',
      ],
      '@stylistic/brace-style': [
        'error',
        '1tbs',
      ],
      '@stylistic/comma-dangle': [
        'error',
        'always-multiline',
      ],
      '@stylistic/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      '@stylistic/comma-style': [
        'error',
        'last',
      ],
      '@stylistic/computed-property-spacing': [
        'error',
        'never',
      ],
      '@stylistic/dot-location': [
        'error',
        'object',
      ],
      '@stylistic/eol-last': [
        'error',
        'always',
      ],
      '@stylistic/func-call-spacing': [
        'error',
        'never',
      ],
      '@stylistic/function-call-argument-newline': [
        'error',
        'never',
      ],
      '@stylistic/function-paren-newline': [
        'error',
        'multiline-arguments',
      ],
      '@stylistic/generator-star-spacing': [
        'error',
        {
          before: true,
          after: false,
        },
      ],
      '@stylistic/implicit-arrow-linebreak': [
        'error',
        'beside',
      ],
      '@stylistic/indent': [
        'error',
        INDENT_SPACES,
      ],
      '@stylistic/jsx-quotes': [
        'error',
        'prefer-double',
      ],
      '@stylistic/key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      '@stylistic/keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      '@stylistic/linebreak-style': [
        'error',
        'unix',
      ],
      '@stylistic/lines-around-comment': [
        'error',
        {
          allowArrayStart: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          beforeLineComment: true,
        },
      ],
      '@stylistic/lines-between-class-members': [
        'error',
        'always',
      ],
      '@stylistic/max-len': [
        'error',
        { code: MAX_LINE_LENGTH },
      ],
      '@stylistic/max-statements-per-line': [
        'error',
        { max: 1 },
      ],
      '@stylistic/new-parens': [
        'error',
        'always',
      ],
      '@stylistic/newline-per-chained-call': [
        'error',
        { ignoreChainWithDepth: 2 },
      ],
      '@stylistic/no-extra-parens': [
        'error',
        'all',
        {
          nestedBinaryExpressions: false,
          ignoreJSX: 'multi-line',
        },
      ],
      '@stylistic/no-multi-spaces': [
        'error',
        { exceptions: { ImportDeclaration: true }},
      ],
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
        },
      ],
      '@stylistic/no-tabs': [
        'error',
        { allowIndentationTabs: false },
      ],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/no-whitespace-before-property': ['error'],
      '@stylistic/nonblock-statement-body-position': [
        'error',
        'below',
      ],
      '@stylistic/object-curly-newline': [
        'error',
        { multiline: true },
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: false,
          objectsInObjects: false,
        },
      ],
      '@stylistic/object-property-newline': ['error'],
      '@stylistic/operator-linebreak': [
        'error',
        'before',
      ],
      '@stylistic/padded-blocks': [
        'error',
        'never',
      ],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: [
            'const',
            'let',
            'var',
          ],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: [
            'const',
            'let',
            'var',
          ],
          next: [
            'const',
            'let',
            'var',
          ],
        },
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'directive',
          next: 'directive',
        },
      ],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      '@stylistic/rest-spread-spacing': [
        'error',
        'never',
      ],
      '@stylistic/semi': [
        'error',
        'always',
      ],
      '@stylistic/semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      '@stylistic/semi-style': [
        'error',
        'last',
      ],
      '@stylistic/space-before-blocks': [
        'error',
        'always',
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      '@stylistic/space-in-parens': [
        'error',
        'never',
      ],
      '@stylistic/space-unary-ops': [
        SPACE_UNARY_OPS,
        {
          words: true,
          nonwords: false,

          overrides: {
            new: false,
            '++': true,
            '--': true,
          },
        },
      ],
      '@stylistic/switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],
      '@stylistic/template-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/template-tag-spacing': [
        'error',
        'always',
      ],
      '@stylistic/wrap-iife': [
        'error',
        'any',
      ],
      '@stylistic/wrap-regex': ['error'],
      '@stylistic/yield-star-spacing': [
        'error',
        'before',
      ],

      /** **********************************************************************/
      // JSX

      '@stylistic/jsx-child-element-spacing': 'error',
      '@stylistic/jsx-closing-bracket-location': [
        'error',
        {
          selfClosing: 'props-aligned',
          nonEmpty: 'after-props',
        },
      ],
      '@stylistic/jsx-closing-tag-location': [
        'error',
        'tag-aligned',
      ],
      '@stylistic/jsx-curly-brace-presence': [
        'error',
        {
          props: 'always',
          children: 'always',
          propElementValues: 'always',
        },
      ],
      '@stylistic/jsx-curly-newline': [
        'error',
        {
          multiline: 'consistent',
          singleline: 'consistent',
        },
      ],
      '@stylistic/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          attributes: { allowMultiline: true },
          children: true,
        },
      ],
      '@stylistic/jsx-equals-spacing': [
        'error',
        'never',
      ],
      '@stylistic/jsx-first-prop-new-line': [
        'error',
        'multiline',
      ],
      '@stylistic/jsx-function-call-newline': [
        'error',
        'multiline',
      ],
      '@stylistic/jsx-indent-props': [
        'error',
        {
          indentMode: 2,
          ignoreTernaryOperator: false,
        },
      ],
      '@stylistic/jsx-max-props-per-line': [
        'error',
        { when: 'multiline' },
      ],
      '@stylistic/jsx-newline': [
        'error',
        {
          prevent: true,
          allowMultilines: true,
        },
      ],
      '@stylistic/jsx-one-expression-per-line': [
        'error',
        { allow: 'non-jsx' },
      ],
      '@stylistic/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: false,
          allowNamespace: true,
          allowLeadingUnderscore: false,
        },
      ],
      '@stylistic/jsx-self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      '@stylistic/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: false,
          shorthandLast: true,
          multiline: 'last',
          noSortAlphabetically: false,
          reservedFirst: true,
          locale: 'auto',
        },
      ],
      '@stylistic/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'proportional-always',
        },
      ],
      '@stylistic/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'ignore',
          logical: 'ignore',
          prop: 'parens-new-line',
          propertyValue: 'parens',
        },
      ],

      /** **********************************************************************/
      // REACT

      'react/jsx-uses-vars': ['error'],
      'react/button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: true,
        },
      ],
      'react/destructuring-assignment': [
        'error',
        'never',
      ],
      'react/jsx-boolean-value': [
        'error',
        'always',
      ],
      'react/jsx-fragments': [
        'error',
        'syntax',
      ],
      'react/jsx-no-duplicate-props': [
        'error',
        { ignoreCase: true },
      ],
      'react/jsx-no-script-url': ['error'],
      'react/jsx-no-useless-fragment': [
        'error',
        { allowExpressions: false },
      ],
      'react/no-arrow-function-lifecycle': ['error'],
      'react/no-this-in-sfc': ['error'],
      'react/prefer-es6-class': [
        'error',
        'always',
      ],
      'react/require-render-return': ['error'],

      /** **********************************************************************/
      /* ACCESSIBILITY
         https://github.com/jsx-eslint/eslint-plugin-jsx-a11y */

    },
  },
];
