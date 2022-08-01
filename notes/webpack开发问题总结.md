##### 1. 为什么thread-loader会拖慢打包的过程

通过查询之后,thread-loader需放置到其他loader之前,会开启一个独立的worker池中运行,

1. 每一个worker都是一个独立的node.js进程,开销大概600ms,同时限制进程的数据交换
2. **请注意仅在耗时的操作中使用此loader**

##### 2. 在css文件中通过import引入之后cssloader并没有经过postcss-loader处理

通过在css-loader设置的使用

ImportLoaders 数量是指需要被处理的loader

```js
{loader:"css-loader",options:{ importLoaders:1 }}
```

##### 3. 在css文件中使用@import url() 这种方式并不能引入模块依赖图中

使用 `@import ""` 的方式

或者在main文件引入 `import("")`

##### 4. 如果打包之后通过CDN引用lodash,而不去打包lodash

```js
import { deepClone } from "lodash"
```

在开发中使用上述写法,打包之后是否有影响?

无影响,因为在打包之后,上述代码会发生改变,就不是通过import的形式去打包文件
