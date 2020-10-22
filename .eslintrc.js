module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended',
    '@vue/standard',
  ],

  // required to lint *.vue files
  plugins: [
    'vue',
    'security',
    'kolibri'
  ],

  globals: {
    editableProperty: true,
    editableInnerProperty: true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'semi': [2, "never"],
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    'comma-dangle': ['error', 'always-multiline'],

    // allow console.log during development only
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'warn',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',

    'vue/require-default-prop': 'off',
    'vue/attribute-hyphenation': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],
    'vue/prop-name-casing': 'error',
    'vue/order-in-components': 'off',
    'vue/this-in-template': 'error',
    'vue/attributes-order': 'off',
    'vue/require-prop-types': 'off',

    'kolibri/vue-no-unused-methods': 'error',
    'kolibri/vue-no-unused-properties': 'error',
    'kolibri/vue-no-unused-vuex-properties': 'error'
  }
}
