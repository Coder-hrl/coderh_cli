// 配置babel-loader属性
module.exports = {
  // 设置预设,包括@babel/preset-env  @babel/preset-react转换react的babel预设
  presets: [
    // 这个里面包含了很多插件,无需去下载其他的插件
    [
      '@babel/preset-env',
      // {  // 使用预设的方式设置
      //   // false 不使用任何的polyfill
      //   // usage 需要哪些polyfill,就引用哪些polyfill
      //   // entery 需要自己手动的去import引用core-js/stable 和regenerator-runtime/runtime
      //   useBuiltIns: 'usage',
      //   // 使用corejs 3 的版本
      //   corejs: 3,
      // },
    ],
    '@babel/preset-react',
    // 在babel中对typescript的预设,其中内置了很多的插件和包
    '@babel/preset-typescript',
  ],

  plugins: [
    // 转换箭头函数为普通函数的
    '@babel/plugin-transform-arrow-functions',
    // 将const和let变量声明转换为var变量
    '@babel/plugin-transform-block-scoping',
    // 防止polyfill在打包转换时污染工具包,这个插件只转换我们所编写的代码
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
  ],
}
