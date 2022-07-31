module.exports = {
  env: {
    //   运行在浏览器端
    browser: true,
    // 使用CommonJs
    commonjs: true,
    // 使用es2021
    es2021: true,
  },
  // 继承其他规则的信息
  extends: ['plugin:react/recommended'],
  //   解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    //  是否使用ecma的特性
    ecmaFeatures: {
      jsx: true,
    },
    //  使用ecma版本最新的版本
    ecmaVersion: 'latest',
  },
  //   使用的插件
  plugins: ['react', '@typescript-eslint'],
  // 自定义设置rules规则
  rules: {
    'no-unused-vars': 'off',
    semi: 'off',
  },
}
