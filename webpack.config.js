var path = require('path')

module.exports = {
  entry: "./lib/SiblingsManager",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  context: __dirname,
  externals: {
    "react": "react",
    "react-native": "react-native",
    "react-native/Libraries/EventEmitter/EventEmitter": "react-native/Libraries/EventEmitter/EventEmitter"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
}
