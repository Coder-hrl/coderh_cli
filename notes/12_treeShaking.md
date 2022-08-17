##### TreeShaking

源自于纯函数的概念,将完全不会使用的代码(dead code)清除掉

通过 Esmodule 的静态分析来实现这个效果,在 package.json 中的 sideEffect 中使用

webpack5 中也对 commonjs 也进行 TreeShaking 优化

##### 两种方案来进行 treeShaking 优化

sideEffect 则会对一个文件来进行判断是否有影响

另外一种则是通过打标记,来判断这段代码是否有影响,然后来进行操作
