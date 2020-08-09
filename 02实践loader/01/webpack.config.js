const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			}
		}, {
			test: /\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2,//查询参数 importLoaders，用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader。
						modules: true,//查询参数 modules 会启用 CSS 模块规范。默认情况下，这将启用局部作用域 CSS。
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		}]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
}