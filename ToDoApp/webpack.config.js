const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

module.exports = {
  mode: "development",
  context: __dirname + "/src",
  devtool: "#cheap-module-source-map",
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname, "src", "index")
  ],
  output: {
    filename: "[name].js",
    path: "/",
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules", path.resolve("./src")]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[folder]__[local]--[hash:base64:5]"
            }
          },
          {
            loader: "resolve-url-loader",
            options: {
              keepQuery: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new UnusedFilesWebpackPlugin({
      patterns: "**/*.js",
      globOptions: {
        ignore: ["node_modules/**/*"]
      }
    })
  ]
};