const path = require('path')
const resolve = (name) => path.resolve(__dirname, name)
module.exports = {
  // webpack编译入口文件
  entry: './src/main.js',
  output: {
    // 必须是绝对路径,使用Node内置包path来得到
    path: resolve('./build'),
    filename: 'main.js',
  },
  module: {
    // rules数组里面可以配置多个loader,
    rules: [
      // test 是用来匹配后缀名,同时需要使用 \. 来进行转义
      {
        test: /\.js$/,
        // use可以为数组,对象
        /**
         * 同时loader的执行顺序,是从后往前执行的,这是webpack执行解析顺序
         * use:[
         *      //options可选属性 每个loader的可选属性
         *      { loader:'thread-loader' },  //全写
         *      { loader:'babel-loader' }
         *    ]
         */
        use: ['babel-loader'],
      },
      {
        // 用来匹配css资源
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            // options: {   行内模式
            //   postcssOptions: {
            //     plugins: [require('autoprefixer')],
            //   },
            // },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
}
