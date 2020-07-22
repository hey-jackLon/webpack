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
						//在 css-loader 前应用的 loader 的数量,查询参数 importLoaders，用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader。
						importLoaders: 2,//0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
						modules:true
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