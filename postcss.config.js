module.exports = {
  // postcss 插件设置
  plugins: [
    //帮助我们将一些现代的css特性,转换成大多数浏览器认识的css,而且还会添加所需的ployfill
    // postcss-preset-env 已内置autoprefixer
    require('postcss-preset-env'),
  ],
}
