const { merge } = require('webpack-merge');

const webpackConfigDev = {
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		port: 9000,
		hot: true,
		historyApiFallback: true,
	},
};
module.exports = merge(require('./webpack.config.common'), webpackConfigDev);
