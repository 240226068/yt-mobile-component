// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'space-before-function-paren': 0,
    'no-useless-call': 0,
    'no-undef': 0,
    'semi': 0,
    'no-useless-escape': 0,
    'spaced-comment': 0,
    'no-unused-vars': 0,
    'template-curly-spacing': 0,
    'quotes': 0,
    'camelcase': 0,
    'no-template-curly-in-string': 0,
    'no-mixed-operators': 0,
    'prefer-promise-reject-errors': 0,
    'wrap-iife': 0,
    'no-unused-expressions': 0,
    'no-trailing-spaces': 0,
    'no-tabs': 0,
    'no-return-assign': 0,
    'block-spacing': 0,
    'space-in-parens': 0,
    'new-cap': 0,
    'padded-blocks': 0,
    'no-eval': 0
  }
}
