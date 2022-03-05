const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

module.exports = {
	entry: path.resolve(__dirname, '../src/index.tsx'),
	module: {
		rules: [
			{
				test: /\.tsx|\.ts|.js$/,
				exclude: path.resolve(__dirname, '../node_modules/'),
				include: path.resolve(__dirname, '../src'),
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['react-refresh/babel'],
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	plugins: [
		new ReactRefreshWebpackPlugin(),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../src/index.html') }),
		new webpack.EnvironmentPlugin([
			/**여기 env 정보  */
		]),
	],
};
