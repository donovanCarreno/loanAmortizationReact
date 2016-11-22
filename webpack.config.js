module.exports = {
  entry: './src/index.jsx',

  output: {
    path: './public',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'bable',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
