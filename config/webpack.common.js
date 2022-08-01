const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const resolve = name => path.resolve(__dirname, name)
module.exports = {
  // 绝对路径
  context: resolve('../'),
  // entry是相对于context的配置的路径,而不是相对于文件所在的路径.默认所处的是根目录
  // 配置解析入口点和加载器loader的配置,可以通过设置多入口进行打包
  entry: './src/main.js',

  output: {
    path: resolve('../build'),
    // 生成hash值,长度为12
    filename: 'js/[name].[contenthash:6].js',
    chunkFilename: 'js/[name].chunk.js'
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
        // 包含目录 src 正则
        include: /src/
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        // 排除目录正则
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        include: /src/
      },
      {
        // 用来匹配css资源
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader'
            // options: {   行内模式
            //   postcssOptions: {
            //     plugins: [require('autoprefixer')],
            //   },
            // },
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        // 可以识别.png,.jpg,.jpeg和.svg结尾的文件
        // 加载图片资源
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset', //webpack5 新增的特性
        generator: {
          filename: 'img/[name].[hash:12].[ext]'
          //与output中的assetModuleFilename配置----也可以在这个地方配置
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
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
          filename: 'font/[name].[hash:12].[ext]'
        }
      }
    ]
  },
  // resolve 帮助我们找到合适的模块,设置模块如何被解析
  resolve: {
    // 起别名
    alias: {
      '@': resolve('./src'),
      components: resolve('./src/components')
    },
    // 扩展名和扩展名预设
    extensionAlias: {
      '.js': ['.ts', '.js', '.jsx', '.tsx'],
      '.css': ['.less', '.scss', '.css']
    },
    // 查询添加后缀名
    extensions: ['.js', '.css', '.json', '.vue'],
    // 模块解析
    modules: ['node_modules']
  },
  // 代码压缩优化
  optimization: {
    minimize: true,
    minimizer: [
      // 已内置到webpack5中
      new TerserPlugin({
        // 是否将注释剥离到单独的文件中
        extractComments: true
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
    }
  },
  plugins: [
    // // 每次打包时清除上次打包的文件
    new CleanWebpackPlugin(),
    // // 生成一个html,同时可以自己指定template模板,title指的是title名称
    new HtmlWebpackPlugin({
      title: 'coderh_cli',
      template: './public/index.html'
    }),
    //我们也可以为他提供一个模板
    new DefinePlugin({
      // 给全局定义开发常量
      BASE_URL: '"./"'
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
            ignore: ['**/index.html', '**/.DS_Store']
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}
