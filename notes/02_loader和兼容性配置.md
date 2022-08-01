> loader本质上是一个函数,plugin本质上是一个自实现的类

##### pnpm构建速度和所占内存比,非扁平化node_modules都是优于yarn和npm的

##### **webpack在打包时会生成依赖关系图**,这个依赖关系图包含了所有的模块

根据图结构去打包一个个模块

##### 我们需要使用loader来加载转换模块化源代码

##### -D dev dependence 开发时依赖   -S dependence 生产时依赖

peer-dependence  相匹配的依赖

##### loader配置方式

1. cli配置
2. import时 文件的配置
3. 通过 webpack.config.js 来进行配置(**非常推荐**)

##### 在解析css的时候,会把css通过js编写的方式实现

##### style-loader的作用  将打包之后的css插入到HTML中style标签中

1. 行内样式
2. 外引入css文件
3. 插入到style标签中进行解析

##### 如何处理less和scss stylus的预处理器

在安装less解析的时候,我们同时需要安装less和less-loader

##### less-loader只是负责将less文件转换为css文件

##### css的浏览器的兼容性问题

> 针对不同的浏览器所支持的特性,比如css特性,js特性,之间的兼容性

autoprefixer和babel所做的效果都是一样的

设置postcss-preset-env

##### .browserlistrc 浏览器兼容性标准   以 **can I use 中查到为主**

`> 1%` 表示市场所需占有率要大于百分之1

`last 2 version`  最后两个版本     `not dead`  指浏览器在 24个月没有更新且官方支持

与auto-prefixer,babel,postcss-preset-env等都是会根据.browserslist判断的浏览器兼容性标准来进行配置

会给到我们所要的信息 `npx browserlist ">1%, last 2 version, not dead"`

##### 前端工程化  

万事不需要自己来进行配置,可以一键进行配置,比如浏览器兼容性配置