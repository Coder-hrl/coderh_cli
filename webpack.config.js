const path = require('path')
const resolve = (name) => path.resolve(__dirname, name)
module.exports = {
  entry: './src/main.js',
  output: {
    // 必须是绝对路径,使用Node内置包path来得到
    path: resolve('./build'),
    filename: 'main.js',
  },
  module: {},
}
