const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const webpackConfigProd = {
	mode: 'production',
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.css?$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.ts(\?.*)?$/i,
				include: path.resolve(__dirname, '../src'),
				exclude: /node_modules/,
				parallel: true,
			}),
		],
	},
};

module.exports = merge(require('./webpack.config.common'), webpackConfigProd);
