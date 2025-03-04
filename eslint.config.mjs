import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
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
  });

export default [
  ...compat.extends('eslint:recommended'),
  {
    // https://github.com/jsx-eslint/eslint-plugin-react#configuration-new-eslintconfigjs
    plugins: {react: react},
    languageOptions: {
      parserOptions: {ecmaFeatures: {jsx: true}},
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
        30,
      ],

      'consistent-return': [
        'error',
        {treatUndefinedAsUnspecified: true},
      ],

      'consistent-this': [
        'error',
        'self',
      ],
      curly: ['error'],

      'default-case': [
        'error',
        {commentPattern: '^skip\\sdefault'},
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
        {allowParens: true},
      ],

      'no-console': [
        'error',
        {allow: ['warn']},
      ],

      'no-else-return': [
        'error',
        {allowElseIf: false},
      ],

      'no-empty': [
        'error',
        {allowEmptyCatch: true},
      ],

      'no-empty-function': ['error'],
      'no-eq-null': ['error'],

      'no-eval': [
        'error',
        {allowIndirect: true},
      ],

      'no-extend-native': ['error'],
      'no-extra-bind': ['error'],
      'no-extra-label': ['error'],

      'no-implicit-coercion': [
        'error',
        {disallowTemplateShorthand: false},
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
        {hoist: 'all'},
      ],

      'no-throw-literal': ['error'],
      'no-undef-init': ['error'],
      'no-undefined': ['error'],
      'no-unneeded-ternary': ['error'],

      'no-unused-expressions': [
        'error',
        {allowShortCircuit: true},
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
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: [
            'none',
            'all',
            'multiple',
            'single',
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

      'array-bracket-newline': [
        'error',
        {multiline: true},
      ],

      'array-bracket-spacing': [
        'error',
        'never',
      ],

      'array-element-newline': [
        'error',
        {
          multiline: true,
          minItems: 2,
        },
      ],

      'arrow-parens': [
        'error',
        'as-needed',
        {requireForBlockBody: true},
      ],

      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'block-spacing': [
        'error',
        'always',
      ],
      'brace-style': [
        'error',
        '1tbs',
      ],
      'comma-dangle': [
        'error',
        'always-multiline',
      ],

      'comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      'comma-style': [
        'error',
        'last',
      ],
      'computed-property-spacing': [
        'error',
        'never',
      ],
      'dot-location': [
        'error',
        'object',
      ],
      'eol-last': [
        'error',
        'always',
      ],
      'func-call-spacing': [
        'error',
        'never',
      ],
      'function-call-argument-newline': [
        'error',
        'never',
      ],
      'function-paren-newline': [
        'error',
        'multiline-arguments',
      ],

      'generator-star-spacing': [
        'error',
        {
          before: true,
          after: false,
        },
      ],

      'implicit-arrow-linebreak': [
        'error',
        'beside',
      ],
      indent: [
        'error',
        2,
      ],
      'jsx-quotes': [
        'error',
        'prefer-double',
      ],

      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ],

      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'linebreak-style': [
        'error',
        'unix',
      ],

      'lines-around-comment': [
        'error',
        {
          allowArrayStart: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          beforeLineComment: true,
        },
      ],

      'lines-between-class-members': [
        'error',
        'always',
      ],

      'max-len': [
        'error',
        {code: 120},
      ],

      'max-statements-per-line': [
        'error',
        {max: 1},
      ],

      'new-parens': [
        'error',
        'always',
      ],

      'newline-per-chained-call': [
        'error',
        {ignoreChainWithDepth: 2},
      ],

      'no-extra-parens': [
        'error',
        'all',
        {
          nestedBinaryExpressions: false,
          ignoreJSX: 'multi-line',
        },
      ],

      'no-multi-spaces': [
        'error',
        {exceptions: {ImportDeclaration: true}},
      ],

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
        },
      ],

      'no-tabs': [
        'error',
        {allowIndentationTabs: false},
      ],

      'no-trailing-spaces': ['error'],
      'no-whitespace-before-property': ['error'],
      'nonblock-statement-body-position': [
        'error',
        'below',
      ],

      'object-curly-newline': [
        'error',
        {multiline: true},
      ],

      'object-curly-spacing': [
        'error',
        'never',
      ],
      'object-property-newline': ['error'],
      'operator-linebreak': [
        'error',
        'before',
      ],
      'padded-blocks': [
        'error',
        'never',
      ],

      'padding-line-between-statements': [
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

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],

      'rest-spread-spacing': [
        'error',
        'never',
      ],
      semi: [
        'error',
        'always',
      ],

      'semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],

      'semi-style': [
        'error',
        'last',
      ],
      'space-before-blocks': [
        'error',
        'always',
      ],

      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      'space-in-parens': [
        'error',
        'never',
      ],

      'space-unary-ops': [
        2,
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

      'switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],

      'template-curly-spacing': [
        'error',
        'always',
      ],
      'template-tag-spacing': [
        'error',
        'always',
      ],
      'unicode-bom': [
        'error',
        'never',
      ],
      'wrap-iife': [
        'error',
        'any',
      ],
      'wrap-regex': ['error'],
      'yield-star-spacing': [
        'error',
        'before',
      ],
    },
  },
];
