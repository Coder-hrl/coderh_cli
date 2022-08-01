##### source-map

> 因为生成的打包代码是被压缩丑化,转换ES5之后的代码,索引号行号都是错误的
>
> 为了能更快的定位到错误,所以使用source-map
>
> 他是额外生成一个.map文件的,映射到代码源文件

通过构建速度的快慢,热更新速度的快慢,不同的值,打包性能也不一样

可以去官网一点点的进行实验,查询

如果不生成source-map我们可以直接设置devtool为false

##### 生产环境可以设置none或者为false,都不会生成source-map

##### 开发环境默认下设置devtool值为eval属性

##### devtool:source-map 后续会生成一个.map文件

inline-source-map 会生成source-map,但不会生成一个单独的文件,而是放在打包文件的后面

eval  帮助我们生成映射,是源文件代码

source-map 则帮助我们生成的映射是打包之后的文件,最完整,拥有行列的映射错误信息    

cheap-source-map 低开销的source-map,构建较高效,也可以正常报错,但是**没有生成列映射错误信息**   会单独生成一个map文件   

cheap-module-source-map 和cheap-source-map一致,不过对对源自loader的sourcemap处理更好, 目前比较推荐

hidden-source-map **隐藏打包文件最后一行**的sourceMappingUrl指向map文件

nosources-source-map **隐藏源文件**,只有错误提示,并没有加载后源代码

##### 组合的规则如下

inline-|hidden|eval 三选一

nosources 可选值

cheap 可选值, 可以跟随module

### Babel的深入解析

为什么我们需要babel?          需要安装@babel/preset-env

使用的的是ES6及以上代码进行开发时,可能用户浏览器版本较低导致代码错误,同时使用TypeScript和React项目时都离不开Babel的

1. 工具链,用于旧浏览器或者转换为向后兼容版本的JavaScript
2. 语法转换,源代码转换,Polyfill实现目标缓解缺少功能

babel实现了语法(AST)分析,从而进行js代码降级处理

##### babel的转换原理(底层)

词法分析==>语法分析==>解析之后parsing转换为AST抽象语法树最后再根据AST语法树进行反向生成目标代码

在babel转换的时候,ES6也进行词法分析==>语法分析,源AST=>新AST=>转换为ES5

解析(parsing)=>转换(transform)=>生成(目标源代码)