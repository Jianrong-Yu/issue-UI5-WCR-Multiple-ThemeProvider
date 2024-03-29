// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;

const federationConfig = require('./webpack.federation.config');

const isProduction = process.env.NODE_ENV == "production";


const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 5101,
  },
  plugins: [
    new ModuleFederationPlugin(federationConfig),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
