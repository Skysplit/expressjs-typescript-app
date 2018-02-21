const { CheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader')
const path = require('path');
const fs = require('fs');

const nodeModules = fs.readdirSync('node_modules')
  .filter((mod) => !['.bin'].includes(mod))
  .reduce((modules, mod) => Object.assign(modules, {
    [mod]: `commonjs ${mod}`
  }))

module.exports = {
  entry: path.resolve(__dirname, 'src/server.ts'),
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  externals: nodeModules,
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
