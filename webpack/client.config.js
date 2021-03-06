const config = require('sapper/webpack/config.js');
const webpack = require('webpack');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
	entry: config.client.entry(),
	output: config.client.output(),
	resolve: {
		extensions: ['.js', '.json', '.html']
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						hydratable: true,
						hotReload: true
					}
				}
			}
		]
	},
	mode,
	plugins: [
		dev && new webpack.HotModuleReplacementPlugin()
	].filter(Boolean),
	devtool: dev ? 'inline-source-map' : false
};