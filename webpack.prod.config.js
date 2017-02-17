/* eslint-disable no-undef, one-var */

/**
 * Webpack Production Config
 *
 * @module config Configuration options
 */

/**
 * System imports.
 */
const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const autoprefixer = require( 'autoprefixer' );

//noinspection JSUnresolvedFunction
/**
 * Webpack config object.
 */
const prodConfig = {

	// The entry point of our app. Where our dependency graph starts.
	entry: [
		'./src/index'
	],

	// The output location for our compiled bundle.
	output: {
		filename: 'bundle.min.js',
		path: path.resolve( __dirname, 'assets/js' )
	},

	// Loaders. These transform our code by running them through transpilers.
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader!postcss-loader!sass-loader'
				})
			}
		]
	},

	// Here we are exposing a jQuery global that can be used in modules since WordPress is using it.
	externals: {
		'jQuery': 'jQuery'
	},
	plugins: [

		// Extract the CSS file.
		new ExtractTextPlugin( '../css/wp-todo.css' ),

		// Configure autoprefixer.
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer()
				]
			}
		})
	],

	// This allows for JS and SCSS source maps.
	devtool: 'cheap-source-map'
};

/**
 * Export the config.
 */
module.exports = prodConfig;
