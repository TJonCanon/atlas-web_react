const path = require('path');
const dashboardDir = path.resolve(__dirname, '..');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    compress: true,
    port: 8564,
    static: {
      directory: path.join(dashboardDir, 'dist'),
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: "image-webpack-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        }
      },
    ],
  },
};