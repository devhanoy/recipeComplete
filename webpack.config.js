var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "./"),
  entry: {
    index: "./client/index",
    login: "./client/login"
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
