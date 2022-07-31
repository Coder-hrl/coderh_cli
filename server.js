const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

// 使用koa异常是因为,内部使用了res和req,而Koa使用的则是ctx

const app = express()

// 传入配置信息,webpack根据配置信息进行编译
const config = require('./webpack.config')

// 生成compiler对象
const compiler = webpack(config)

const middleware = webpackDevMiddleware(compiler)

// 添加中间件
app.use(middleware)

app.listen(3000, () => {
  console.log('服务已启动')
})
