module.exports = {
  mode: "development",
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          "@babel/react"
        ]
      }
    }]
  },
}