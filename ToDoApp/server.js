/* eslint no-console: "off" */

const express = require("express");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const compiler = webpack(webpackConfig);

const APP_PORT = 8080;

const app = express();

app.set("trust proxy", true);
app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false,
      children: false
    }
  })
);
app.use(webpackHotMiddleware(compiler));

app.listen(APP_PORT, err => {
  if (err) console.log(`=> OMG!!! 🙀 ${err}`);
  console.log(`=> 🔥  Webpack dev server is running on port ${APP_PORT}`);
});
