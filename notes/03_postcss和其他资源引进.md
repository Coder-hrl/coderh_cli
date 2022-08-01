##### browserslist使用caniuse-lite来连接can i use 网站

##### rc runtimecompiler

##### user-select 用于设置或检索是否允许用户选中文本

##### PostCss  通过JavaScript来转换样式的工具

帮助我们进行css 转换和适配

Postcss-loader以及其中的配置

autoprefixer的使用 自动添加浏览器前缀

##### 配置postcss文件

postcss-preset-env 里面包含了大多数所需要的特性

其中内置了autoprefixer包

包括把颜色进制转换为rgba的形式,等众多特性

什么时候配置xx.config.js和什么时候配置rc,这是通过官网来进行配置的

##### image资源引进资源

我们需要使用file-loader,这个loader属性来进行加载这些资源

file-loader 5.x之后通过default属性拿到值

通过file-loader处理之后会生成128位的名称

##### url-loader比file-loader多一个limit限制,是否转换为base64图片

这也是性能优化的一种

##### 在webpack5中新增了4中资源类型,来代替loader

1. asset/resource 资源处理,按照配置生成图片资源  file-loader,加载图片需要加.default,而type则不需要
2. asset/inline 进行内置处理,只生成base64的url编码 url-loader
3. asset/source  进行配置表      raw-loader
4. asset   类似url-loader的limit配置,判断是生成资源还是urlbase64

##### plugin 用于执行更加广泛的任务,比如打包优化,资源管理

cleanWebpackPlugin 清空打包之后的文件

htmlwebpackPlugin  每次打包之后都自动进行引用

通过ejs模板来生成这个html文件