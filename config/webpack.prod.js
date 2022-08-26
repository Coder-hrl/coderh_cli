const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
module.exports = function () {
  // 设置开发时全局变量NODE_ENV
  process.env.NODE_ENV = 'production'

  const config = merge(commonConfig(true), {
    mode: 'production',
    // 开发环境下需要设置不需要被打包的包
    externals: {
      // 注意这些不被打包的包需要在index.html中CDN进行加载
      lodash: '_',
      dayjs: 'dayjs'
    },
    // 打包代码压缩优化
    optimization: {
      // 用来做代码treeShaking,在模式为production中是默认开启的
      // 会标注出哪些代码是dead code,然后通过minimize优化,剪去dead code
      // unused haromony export mul
      usedExports: true,
      // 开启插件优化
      minimize: true,
      minimizer: [
        // 已内置到webpack5中,使用函数的默认值就可,无需自己去重复配置
        new TerserPlugin({
          parallel: true,
          // 是否将注释剥离到单独的文件中
          extractComments: false,
          exclude: /node_modules/,
          include: /src/,
          terserOptions: {
            compress: true,
            mangle: true,
            toplevel: true,
            keep_classnames: false,
            keep_fnames: false
          }
        })
      ],
      // webapck配置,模块的id通过什么算法来进行生成
      chunkIds: 'natural', // natural 自然数    named  名字  determinstic 相同文件  相同的id
      splitChunks: {
        // async异步进行导入
        // initial 同步导入
        // all  同步/异步导入
        chunks: 'all',
        // 最小尺寸,拆分出来的包最小的尺寸应为20kb
        minSize: 1024 * 20,
        // 最大尺寸,拆分出来的包最大的尺寸应为30kb
        maxSize: 1024 * 30,
        // minChunks 表示包至少被导入了几次就进行单独打包
        minChunks: 2,

        cacheGroups: {
          // 进行缓存分组
          vendors: {
            // 适配mac和window系统,通过正则进行匹配
            test: /[\\/]node_modules[/\\/]/,
            filename: '[id]_vendors.js',
            priority: -10 //优先级
          },
          bar: {
            // 对以bar_开头的文件进行一个单独的打包
            test: /bar_/,
            filename: '[id]_bar.js'
          },
          default: {
            // 最小引用值打包
            minChunks: 2
          }
        }
      },
      // 可以直接设置为true/mutiple/single
      runtimeChunk: {
        name: 'runtime-coderh'
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      // 帮助我们把css单独的打包到一个文件中
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:6].css'
      }),
      // CSS代码压缩
      new CSSMinimizerWebpackPlugin(),
      // 用来做作用域提升
      new webpack.optimize.ModuleConcatenationPlugin()
      // new InlineChunkHtmlPlugin()
    ]
  })
  return config
}
