##### Vite 学习

> 下一代前端开发和构建工具,能够显著的提高开发体验
>
> 我们需要通过构建工具对代码进行转换,编译,类似的工具有webpack,rollup

1. Vite工具为什么会这么快

**使用原生ESM方法方案,无需打包**

2. 极速的开发热重载
3. 丰富的功能支持
4. 构建执行仍是使用的rollup,并且是预配置的,可以输出生成换的优化过的静态资源

##### Vite的未来发展

未来非常看好,因为热更新和开发的速度非常快,但是大型项目使用Vite的还是比较少的

Vite插件的支持也不够完善

##### Vite是基于浏览器支持原生ESModule来进行开发的

必须要补全js路径

Vite可以对加载的文件先进行处理,.Vue->es module

**extensions 扩展名在resolve选项中**

##### 安装Vite 使用vite

```shell
npx vite
```

在Vite中,其中内置了很多插件和loader,我们无需一点点去配置

##### 与webpack所做的都是将生成的文件转换之后放到浏览器中

相对于webpack来说,Vite是更加的易上手,易用

##### 但是对于Vue和React的处理还是需要自己去配置

@vitejs/plugin-vue

@vitejs/plugin-Vue-jsx

vite-plugin-vue2

##### 使用预打包

pre-bunding

##### 使用ESBuild构建工具

超强的构建速度,不需要缓存

支持ES6和Commonjs

支持Es6treeShaking

支持TypeScript和jsx

支持sourceMap

Go语言直接转换成机器代码

##### 初始化vue

```js
npm init vite
```

现在改变成了 npm  init  vite操作