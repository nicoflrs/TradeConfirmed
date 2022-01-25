const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env } = require('process')

module.exports = {

    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }    
            }
          },
        ]
      },
    plugins: [new HtmlWebpackPlugin({
        title: 'Development',
        template: path.join(__dirname, "src", "index.html")
    })],
}