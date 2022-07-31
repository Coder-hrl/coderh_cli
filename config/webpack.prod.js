const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
module.exports = function () {
  // 设置开发时全局变量NODE_ENV
  process.env.NODE_ENV = 'production'
  const config = merge(commonConfig, {
    mode: 'production',

    plugins: [new CleanWebpackPlugin(), new ReactRefreshPlugin()]
  })
  return config
}
