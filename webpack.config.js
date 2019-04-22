// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dist = path.resolve(__dirname, "dist");

module.exports = {
  entry: { main: './src/index.js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  output: {
    path: dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dist
  }
};