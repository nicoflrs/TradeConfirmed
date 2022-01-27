const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env } = require('process')

module.exports = {
  mode: env.NODE_ENV,
    entry: path.join(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(__dirname, "index.html")
  })],
    devServer: {
    proxy: {
      '/server': 'http://localhost:3000'
    }
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
          {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          }
        ]
      }
}