module.exports = {
  entry: "./app/components/Root.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /(\.css$|\.scss$)/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
    ]
  },
  devtool: 'source-map',
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.jsx', '*']
  }
}
