#### Webpack是如何帮助我们实现了前端模块化

##### sourceMap配置

> 打包后变成正常代码,可以实现代码错误和逻辑映射

当mode设置为development的时候,其实做了很多的开发优化

当mode设置为production的时候,也做了很多的生产优化

##### 打包后的代码识别

每个模块都会被打包成一个对象**,key为路径地址**,**value是指加载模块内容**

同时定义了一个对象,用来保存加载模块的缓存信息

```js
!function(){}() // 一个简单的立即执行函数
```

当我们加载一个模块时,都会通过一个函数来加载模块

这个函数会先去判断这个模块是否有缓存信息,如果没有缓存信息的话,会添加缓存

将我们要导出的变量,放入到module对象中exports中

##### 模块化的本质是做了一个函数作用域

存在一个module-require来保存所有的module对象

##### 什么是魔法注释

会被编译器,解析器执行解析的注释为魔法注释

##### 通过import引入的module,需要拿到module对象的default

#### sourceMap

> 将转换后的代码,映射到源文件中
>
> 可以重构原始源,快速调试bug

是指devtool选项配置,设置none  ,eval,source-map

打包后的文件与原始编写的代码会有很多的差异

1. 比如转换成ES5,代码丑化压缩,浏览器兼容适配

2. 所对应的代码行号和索引号编译之后肯定不一致

同时生成一个.map文件,浏览器会自动去加载这个文件,以便快速定位错误信息

**需要开启enable JavaScript source map**

source-map是需要花费性能的,每个阶段所需要的模式不一样

开发时    source-map或者cheap-module-source-map

测试时  source-map或者cheap-module-source-map

生产时   devtool : false;

