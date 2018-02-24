const { CheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader')
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const fs = require('fs');

module.exports = {
  entry: path.resolve(__dirname, 'src/server.ts'),
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  externals: nodeExternals({
    modulesFromFile: true,
  }),
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsConfigPathsPlugin(),
    ]
  },
  devtool: 'sourcemap',
  plugins: [
    new CheckerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  }
}
