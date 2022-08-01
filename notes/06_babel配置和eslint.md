### babel配置

通过babel-loader 的预设来进行设置preset预设

stage-3提案

##### polyfill   (打上补丁)

> 如果浏览器本身是不支持ES6的语法的话,而我们确实需要用这个语法进行快速开发项目,我们就可以使用polyfill来打上补丁,让浏览器支持这个语法

打垫片,让我们可以使用最新的JavaScript,帮助我们更好的使用JavaScript

如果浏览器不支持ES6新特性的话,我们可以通过打垫片的方式,让polyfill来填充或者打上一个补丁,让浏览器可以按期执行

##### 使用polyfill在项目中,应该是生产时依赖

> 因为在打包之后到服务器中也需要polyfill

之前下载使用@babel/polyfill

现在也要使用core-js和regenerator-runtime来打polyfill

npm install @babel/plugin-transform-runtime

##### 在babel里面对jsx库进行转换

我们可以使用安装预设的方式来进行转换

`@babel/preset-react`

##### ts-loader和babel-loader的选择

可以使用ts-loader或者使用babel-loader

ts-loader和@babel/preset-typescript都是内置了TypeScript,我们无需去安装TypeScript就可以进行转换

##### 我们希望在编译的时候今早的将typescript类型错误展现出来

一般vscode是可以帮助我们将错误检测出来

##### 我们应该在打包之后对ts代码进行验证,对于类型错误的代码不应该通过打包

babel加预设 和 tsc加ts-loader 的选择

如果输出的内容,和输入的内容比较相似的话,使用tsc

我们需要进行对代码转换进行输出的话,我们应该使用babel进行转换,同时使用tsc进行类型检测

##### Eslint

Eslint是一个静态代码分析工具,(在没有任何程序执行的情况下,对代码进行分析)

##### 如何配置Eslint 

三种模式

1. 检测类型
2. 检测类型,并发现问题
3. 检测类型,发现问题并修改代码

在vscode中安装eslint

安装配置eslint-loader ,在打包之前先进行eslint检验

##### 