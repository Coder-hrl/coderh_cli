const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')
const resolve = (name) => path.resolve(__dirname, name)
module.exports = {
  // 开发模式选择
  mode: 'development',
  devtool: 'source-map',
  // mode: 'production',
  // webpack编译入口文件
  entry: './src/main.js',
  output: {
    // 必须是绝对路径,使用Node内置包path来得到
    path: resolve('./build'),
    filename: 'js/main.js',
    // 打包后asset文件的名字和存在的位置
    // assetModuleFilename: 'img/[name].[hash:6].[ext]',
  },
  module: {
    // rules数组里面可以配置多个loader,
    rules: [
      // test 是用来匹配后缀名,同时需要使用 \. 来进行转义
      {
        test: /\.jsx?$/,
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
        exclude: /node_modules/,
        include: /src/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
      },
      {
        // 用来匹配css资源
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
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
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        // 可以识别.png,.jpg,.jpeg和.svg结尾的文件
        // 加载图片资源
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset', //webpack5 新增的特性
        generator: {
          filename: 'img/[name].[hash:12].[ext]',
          //与output中的assetModuleFilename配置----也可以在这个地方配置
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
        // use: [
        //   {
        //     loader: 'url-loader', //可以设置limit,低于limit大小就转换成base64
        //     options: {
        //       // [ext] 扩展名  [name] 处理文件的名称  [hash] MD4散列函数处理
        //       name: 'img/[name].[hash:6].[ext]',
        //       limit: 1024 * 100,
        //     },
        //   },
        // ],
      },
      // 加载字体文件资源,处理字体图标,也是可以通过type来进行处理
      {
        test: /\.ttf|eot|woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:12].[ext]',
        },
      },
    ],
  },
  plugins: [
    // // 每次打包时清除上次打包的文件
    new CleanWebpackPlugin(),
    // // 生成一个html,同时可以自己指定template模板,title指的是title名称
    new HtmlWebpackPlugin({
      title: 'coderh_cli',
      template: './public/index.html',
    }),
    //我们也可以为他提供一个模板
    new DefinePlugin({
      // 给全局定义开发常量
      BASE_URL: '"./"',
    }),
    // 直接复制完整的文件
    new CopyWebpackPlugin({
      // 复制规则 从public开始复制
      patterns: [
        //配置规则
        {
          from: 'public',
          globOptions: {
            // 传入一个数组,ignore需要使用**/来表示忽略当下文件夹
            ignore: ['**/index.html', '**/.DS_Store'],
          },
        },
      ],
    }),
  ],
}
