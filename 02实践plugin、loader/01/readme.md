1. ##### loaders（file-loader） 文件处理模块

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

   

2. ##### 使用loader打包静态资源

   1. 图片

   ```javascript
   
   ```

   