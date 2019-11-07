let path = require('path');
const HWP = require('html-webpack-plugin');

let conf = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  devServer: {
   // overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader', 'eslint-loader'],
      }
    ]
  },
  plugins: [
    new HWP(
      {template: path.join(__dirname, '/src/index.html')}
    )
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devtool: "eval-sourcemap",
};

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production
    ? 'source-map'
    : 'eval-sourcemap';

  return conf;
};