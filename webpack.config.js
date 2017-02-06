const path = require('path');

const config = {
	entry: [
		'./app/scss/index.scss',
		'./app/index'
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
	devtool: 'inline-source-map'
};

module.exports = config;