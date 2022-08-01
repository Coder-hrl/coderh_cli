##### HMR hot  module Replace

##### 开启Dev Server

##### --watch  监听打包外加使用live server插件提供本地服务

```shell
npx webpack --watch
```

监听webpack打包,一旦文件发生变化,就动态打包成最新的值

**缺点**

1. 会对所有的源代码重新进行编译
2. 编译成功后,会生成新的文件
3. live-server属于vscode插件,需要他人进行安装

##### 提供了webpack-dev-server 来进行开发环境

> dev-server会将编译之后的结果不会输出到其他文件中
>
> 而是直接放到内存上的,使用了memfs这个库来将生成文件放到内存上的

使用热更新,hot设置为true

webpack-dev-server默认是跑到localhost:8080端口上的

#####  通过webpack-dev-middleware使用express模块开启的本地服务

### 模块热替换

只是局部刷新一个模块,而不是全页面进行刷新,会保留部分应用状态

只更新需要变化的内容,节省开发时间

修改js和css,能够立刻在浏览器上展现效果

##### 为什么开启之后,仍然刷新了整个页面呢

因为我们需要手动指定哪些模块开启模块热更新

```js
if(module.hot){
  module.hot.accept("./foo.js"),()=>{}
}
```

##### 这样操作,岂不是开启每个模块的热更新很麻烦

使用框架里面的HMR 像React和Vue中都有独特的包来进行开启热更新

Vue是 Vue-loader ,已经帮助我们开启了Vue组件的热更新功能

React改用react-refresh

##### 提供了两个服务,一个是静态资源的服务,另外一个服务是.net服务

浏览器通过http请求向express资源请求服务,然后将请求的数据在浏览器进行解析

**短连接时无法进行服务端推送的**

如何在js文件发生变化,服务端主动向浏览器推送消息

**我们需要开启socket长连接**,来实现服务器主动推送消息,都是使用的webSocket长连接

