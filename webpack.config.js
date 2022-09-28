const path = require('path')

module.exports = {
  entry: {
    index: './src/scripts/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'src/assets/images/[name].[ext]'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource'
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
