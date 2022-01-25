const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env } = require('process')

module.exports = {
    mode: env.NODE_ENV,
    entry: path.join(__dirname, "src", "index.js"),
    plugins: [new HtmlWebpackPlugin({
        title: 'Development',
        template: 'index.html'
      })],
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
}