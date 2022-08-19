##### TreeShaking

源自于纯函数的概念,将完全不会使用的代码(dead code)清除掉

通过 Esmodule 的静态分析来实现这个效果,在 package.json 中的 sideEffect 中使用

webpack5 中也对 commonjs 也进行 TreeShaking 优化

##### 两种方案来进行 treeShaking 优化

在 package 中的 sideEffect `副作用`属性配置,则会对一个文件来进行判断是否有影响

另外一种则是通过打标记,来判断这段代码是否有影响,然后来进行操作

一旦设置的代码对其他的代码有影响,比如`意外修改全局属性`,`意外新增修改删除`

##### sideEffects 设置

这个属性是传入一个数组来进行,我们需要使用 [] ,如果使用\*\*.css 则会匹配所有的 css 文件

纯模块,将一些工具函数,不会影响其他的函数封装到一个文件中来进行使用
