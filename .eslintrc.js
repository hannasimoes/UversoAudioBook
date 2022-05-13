module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  rules: {
    semi: [1, 'never'],
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'development' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'off',
    'no-param-reassign': 0,
    'no-return-await': 'error',
  },
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: true,
        script: true,
        style: true,
        customBlocks: {
          docs: {
            lang: 'markdown',
          },
          config: {
            lang: 'json',
          },
          module: {
            lang: 'js',
          },
          comments: false,
        },
      },

      usePrettierrc: true,
    },
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
