const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env } = require('process')

module.exports = {
  mode: env.NODE_ENV,
  entry: { src: './client/index.js' },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: './client/index.html'
  })],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'build'),
        publicPath: '/build',
      }
      ,
      proxy:  { 
        '/' : 'http://localhost:3000',
        '/homepage':'http://localhost:3000',
        '/log':'http://localhost:3000'
              },
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
          },
          {
            test: /\.(mp4|svg|png|jpe?g|gif)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]"
              }
            }
          }
        ]
      }
}