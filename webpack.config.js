let path = require('path');
const HWP = require('html-webpack-plugin');

let conf = {
  entry: './src/index.jsx',
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
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new HWP(
      {template: path.join(__dirname, '/src/index.html')}
    )
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: "eval-sourcemap"
};

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production
    ? 'source-map'
    : 'eval-sourcemap';

  return conf;
};