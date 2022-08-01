#### 为什么使用 webpack

> webpack 是静态模块化打包工具为现代化 JavaScript
>
> 静态:`静态资源`
>
> 模块化: `支持CommonJs和Esmodule和其他模块化方案`
>
> 打包:`将less,sass或者ES6以上代码打包成js,css等浏览器可以识别的文件`

浏览器是存在兼容性问题的,JavaScript 和 css 进行兼容,一些浏览器并不支持很新的方案

我们需要使用 css 和 JavaScript 的高级特性快速的开发代码,同时需要实时刷新效果,同时我们还需要生产之后的代码,执行解析速度更快

**Vue 和 React 的脚手架底层都是依赖使用的 webpack**

而是存在 css 样式或 js 问题在低等级浏览器不可用

##### 因为部分浏览器并不支持模块化,更不支持 commonJs

我们需要手动去配置,去配置 loader 和 plugin 等配置

##### 是成为前端架构师和高级前端工程师必不可缺的一点

##### Vite 需要替代 Webpack 需要跟上生态,同时需要更加的稳定

1. 只是提高我们的开发速率

2. 最终需要打包的时候,仍然需要 rollup

##### 我们学习任何东西,都是学习其核心思想,学习其中的设计模式

Babel 各种语法以及 polyfill 和 TypeScript

##### webpack 配置文件和命令行操作

可以查阅 WebpackAPI 可以让我们做一些自定义的东西

##### webpack 是依赖 Node 的,同时帮助我们安装了 npm

webpack-cli 不是一个必须品,我们可以自己去实现 cli,比如 Vue 有 vue-server-cli

##### npx 的作用

从当前目录寻找最近的工具来进行使用

如果未安装工具的话,会通过远程库进行拉取使用
