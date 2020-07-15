##### 1.webpack全局安装

```javascript
npm install webpack webpack-cli -g --registry=https://registry.npm.taobao.org 
```

##### 2.webpack局部安装

```javascript
npm install webpack webpack-cli --save-dev --registry=https://registry.npm.taobao.org 
```

或者：

```
npm install webpack webpack-cli -D --registry=https://registry.npm.taobao.org 
```

一般来说安装webpack-cli就会自动安装webpack，带上淘宝镜像提升下载速度

##### 3.编译

```
npx webpack index.js
```

模块的导入导出必须ES module的规范

##### 4.项目内部查看webpack版本

```
npx webpack -v
```

##### 5.查看webpack的历史版本

```
npm info webpack
```

##### 6.webpack配置文件