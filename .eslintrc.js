// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  globals: {
    '_store': true
  },
  extends: 'airbnb-base',
  // add your custom rules here
  'rules': {
    'import/extensions': ['error', 'always', {
      'js': 'never'
    }],
    // allow optionalDependencies for the future
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['warn', 'error'] }] : 0,
    'no-underscore-dangle': 0,
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': 0,
    'space-before-function-paren': ['error', 'never'],
    'no-mixed-operators': 0,
    'no-unused-vars':  process.env.NODE_ENV === 'production' ? 2 : 1,
    'max-len': ['error', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-confusing-arrow': 0,
    'no-use-before-define': 0,
    'consistent-return': 0,
    'no-plusplus': 0,
    'no-lonely-if': 0,
  }
}
