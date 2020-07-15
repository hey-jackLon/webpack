const path = require('path')
module.exports = {
    entry: './src/index.js',//webpack打包文件的入口
    output: {
        filename: 'main.js',//打包后的输出文件
        path: path.resolve(__dirname, 'dist')//path 后需跟入绝对路径
    }
}