module.exports = {
  // where the root component is, so the compiler can find all the jsx
  entry: "./app/components/App.js",
  // where to put everything once compiled
  output: {
    filename: "bundle.js",
    path: __dirname + '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}
