var path = require('path')
var webpack = require('webpack')
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

module.exports = {
  context: path.join(__dirname, './'),
  entry: {
    index: './client/index'/*,
		index2 : "./index2" */
  },
  output: {
    path: path.join(__dirname, 'public', 'scripts', 'jsx'),
    filename: '[name].js'
        // filename: "bundle.js"
  },
  module: {
	 loaders: [
		 {
			 test: /\.jsx?$/,
			 exclude: /node_modules/,
			 babelrc: false,
			 loader: 'babel-loader',
			  query: {
			  'presets': ['es2015', 'react']
			  }
		 }

	   ]
  },
  watch: true,
    // plugins: [
        // new CommonsChunkPlugin({
		  // name: "commons",
		  // // (the commons chunk name)

		  // //filename: "commons.js",
		  // // (the filename of the commons chunk)

		   // minChunks: 2,
		  // // (Modules must be shared between 3 entries)

		  // // chunks: ["pageA", "pageB"],
		  // // (Only use these entries)
		// })
    // ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#cheap-eval-source-map',
  debug: true
}
 // entry: {
        // a: "./a",
        // b: "./b",
        // c: ["./c", "./d"]
    // },
    // output: {
        // path: path.join(__dirname, "dist"),
        // filename: "[name].js"
    // }
