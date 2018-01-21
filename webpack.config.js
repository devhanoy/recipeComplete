var path = require("path");
var webpack = require("webpack");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  context: path.join(__dirname, "./"),
  entry: {
    index: "./client/index" /*,
		index2 : "./index2" */
  },
  output: {
    path: path.join(__dirname, "public", "scripts", "jsx"),
    filename: "[name].js"
    // filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        //  babelrc: false,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  watch: true,
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "#cheap-eval-source-map"
  // debug: true
};
