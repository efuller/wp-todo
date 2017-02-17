/**
 * Webpack Development Config
 *
 * @module config Configuration options
 */

/**
 * System imports.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/**
 * Webpack config object.
 */
const config = {
	// The entry point of our app. Where our dependency graph starts.
	entry: [
		'./src/index'
	],
	// The output location for our compiled bundle.
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'assets/js')
	},
	// Loaders. These transform our code by running them through transpilers.
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: "css-loader!postcss-loader!sass-loader",
				}),
			}
		]
	},
	// Here we are exposing a jQuery global that can be used in modules since WordPress is using it.
	externals: {
		'jQuery': 'jQuery'
	},
	// Webpack plugins - These are like addons that can provide additional functionality.
	plugins: [
		// Extract the CSS file.
		new ExtractTextPlugin('../css/wp-todo.css'),
		// Configure autoprefixer.
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer(),
				]
			}
		}),
		// Browsersync is a better option when working in a WordPress environment.
		new BrowserSyncPlugin({
			open: false,
			injectChanges: true,
			host: 'localhost',
			port: '3000',
			proxy: 'learnwp.dev'
		}),
	],
	// This allows for JS and SCSS source maps.
	devtool: 'inline-source-map'
};

/**
 * Export the config.
 */
module.exports = config;