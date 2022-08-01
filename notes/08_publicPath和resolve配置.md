#### publicPath  

##### outPut的publicPath   (打包时的配置引用)

path是告诉webpack之后输出到哪个目录中

作用属性: 是指定index.html文件打包引用的基本路径

如何设置为/的话,会形成以下的效果,默认值是为空的![image-20220731151537540](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220731151537540.png)

如果设置为abc/的话,会根据之前的正确路径外加abc/

![image-20220731151849799](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220731151849799.png)

使用**./会产生相对路径**是和默认的效果一致的

```js
js/main.js
./js/main.js // 产生的效果是完全一致的
```

如果部署的话,我们仍然需要使用/来进行运行

##### 和devServer的publicPath

是为开发环境进行服务的

作用是,**是指定本地服务打包后的文件所存在的文件夹**

一般devServer中static中的publicPath和output的publicPath完全一致

##### devSever中的contentBase

在devServer中添加compress来将静态文件进行gzip压缩

![image-20220731160741423](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220731160741423.png)

##### 如何进行跨域操作

通过在devServer中proxy选项来进行配置

##### historyApiFallback

解决单页面应用在跳转路由时,路由不存在返回404 的情况

#####  路径方式

绝对路径 获得文件的绝对路径,从根路径进行操作

相对路径 从某个模块来上下文目录,根据文件所处位置.来生成绝对路径

模块路径  默认从node_modules里面取查询包

##### alias

##### extensions配置扩展名

默认是 js json wasm 文件

通过判断process.env.NODE_ENV的值来进行

通过nginx在服务器上进行跨域配置

```shell
location ^~ /api {
		proxy_pass http://lcoalhost.com
}
```

