##### loaders（加载程序）

- 不许额外引入，只需要npm下载即可

```javascript
module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
        ]
    },
```

##### 使用file-loader&url-loader打包静态资源

1. 图片

   ```javascript
   module: {
           rules: [
               {
                   test: /\.(png|jpg|gif)$/,
                   use: [
                       {
                           loader: 'file-loader',
                           options:{
                               //placeholder 占位符
                               name:'[name]_[hash].[ext]', //name 指保留原名字 ext 指原拓展名
                               outputPath:'images/' //资源打包的文件夹路径
                           }
                       }
                   ]
               },
           ]
       },
   ```

   遇到具体场景查询webpack中file-loader具体配置

   使用url-loader打包文件时使用limit做文件大小限制：

   - 超过limit限制数的单独打包到文件夹	

   - 小于限制数的文件以base64的格式打包到js文件内（建议超过2kb的文件打包到js文件内）

   - limit单位以字节为单位 

   ```javascript
   module: {
           rules: [
               {
                   test: /\.(png|jpg|gif)$/,
                   use: [
                       {
                           loader: 'url-loader',
                           options:{
                               //placeholder 占位符
                               name:'[name]_[hash].[ext]', //name 指保留原名字 ext 指原拓展名
                               outputPath:'images/', //资源打包的文件夹路径
                               limit:102400 //文件打包策略 小于这个数值文件已base64格式打包到js文件内 反之则是打包单独的文件内
                           }
                       }
                   ]
               },
           ]
       },
   ```

##### 使用css-loader&style-loader打包css样式

###### loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)。

```javascript
module: {
        rules: [
            {
                test:/\.(css|scss)$/,
                use:[
                    {
                        loader:'style-loader'//将 JS 字符串生成为 style 节点 style-loader将css样式挂载到head标签中
                    },
                    {
                        loader:'css-loader'//将 CSS 转化成 CommonJS 模块 css-loader分析css文件中的模块引入关系
                    },
                    {
                        loader:'sass-loader'//将 Sass 编译成 CSS
                    },
                    {
                        loader:'postcss-loader'//使用autoprefixer添加浏览器厂商前缀
                    },
                ]
            }           
        ]
    },
```

如遇autoprefixer不生效问题在package.json添加支持的浏览器版本

```javascript
"browserslist": [
    "defaults",
    "not ie <= 8",
    "last 2 versions",
    "> 1%",
    "iOS >= 7",
    "Android >= 4.0"
  ]
```

