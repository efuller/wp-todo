const path = require('path');
const webpack = require('webpack');

// Let's use browser sync.
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
	entry: [
		'./src/index'
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'assets/js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	externals: {
		'jQuery': 'jQuery'
	},
	plugins: [
		new BrowserSyncPlugin({
			open: false,
			injectChanges: true,
			host: 'localhost',
			port: '3000',
			proxy: 'learnwp.dev'
		}),
	],
	devtool: 'inline-source-map'
};

module.exports = config;