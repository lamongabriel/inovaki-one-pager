const path = require('path')

module.exports = {
  entry: {
    index: './src/assets/scripts/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      watch: true
    }
  },

  mode: 'development'
}
