const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
module.exports = function () {
  // 设置开发时全局变量NODE_ENV
  process.env.NODE_ENV = 'development'
  const config = merge(commonConfig, {
    mode: 'development',
    cache: true,
    devServer: {
      // 在开发的publicPath,与output的publicPath不同,默认值为/
      // 如果设置为/abc ,我们必须通过localhost:8080/abc才可以进行访问
      static: { publicPath: '/' },
      // 是否构建完打开浏览器
      open: true,
      // 主机号
      host: '0.0.0.0', //如果你希望项目可以被外部访问时 设置为host:0.0.0.0
      // 端口号
      port: 8080,
      // hot 是否进行热更新,webpack-dev-serve v4默认是开启的
      hot: 'only', // 发生错误时,页面进行回退
      client: {
        // 允许在浏览器中设置日志级别,例如,热模块更换和一个错误的发生
        logging: 'error'
      },
      // 代理
      proxy: {
        // 简单的来配置 "/api:"http://localhost:8080"" 最后会生成 http://localhost:8080/api 的格式
        '/api': {
          target: 'http://localhost:8888',
          // 改变请求源的Origin头,将请求头的host主机转为target
          changeOrigin: true,
          // 请求https,但不验证https证书验证
          secure: false,
          // 路径重写,防止出现http://localhost:8080/api的情况
          pathRewrite: {
            // 会去匹配以/api开头的路径,将其替换成""的形式
            '^/api': ''
          }
        }
      },
      // 在跳转不存在的路由时,重定向到index.html上
      historyApiFallback: true,
      // historyApiFallback: {
      //   rewrites: {
      //     from: /abc/, //正则
      //     to: 'index.html'
      //   }
      // },
      // 监听文件变化
      watchFiles: ['src/**/*', 'public/**/*'],
      // 启用gzip压缩,默认值为false,是否为静态文件开启gzip压缩,会达到0.5的压缩比例
      compress: true // 通过content-encoding和accept-encoding
    },
    plugins: [new ReactRefreshPlugin()]
  })
  return config
}
