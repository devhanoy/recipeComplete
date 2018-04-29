var path = require("path");
var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  name: "standard",
  mode: "development",
  context: path.join(__dirname, "./"),
  entry: {
    recipes: "./client/index",
    login: "./client/login"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js"
    // publicPath: "/"
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
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //           name: "[name]-dist.css",
      //       },
      //   },
      //   {
      //       loader: "extract-loader",
      //   },{
      //   //   loader: 'style-loader' // creates style nodes from JS strings
      //   // }, {
      //     loader: 'css-loader' // translates CSS into CommonJS
      //   }, {
      //     loader: 'less-loader' // compiles Less to CSS
      //   }]
      // },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "less-loader"]
        })
      }
    ]
  },
  watch: true,
  resolve: {
    extensions: [".js", ".jsx", ".html"]
  },
  devtool: "#cheap-eval-source-map",
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, "public")]),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "client", "css"),
        to: path.join(__dirname, "public")
      }
    ]),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      title: "My App Name 23 456",
      filename: /*"index.html",//*/ path.join(
        __dirname,
        "public",
        "recipes.html"
      ),
      template: "./client/template.ejs",
      inject: true,
      hash: true,
      chunks: ["recipes"]
    }),
    new HtmlWebpackPlugin({
      title: "Login",
      filename: /*"index.html",//*/ path.join(
        __dirname,
        "public",
        "login.html"
      ),
      template: "./client/template.ejs",
      inject: true,
      hash: true,
      chunks: ["login"]
    })
  ]
  // debug: true
};
