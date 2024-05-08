const path = require('path');
const dashboardDir = path.resolve(__dirname, '..');

module.exports = {
  entry: path.resolve(dashboardDir, 'src/index.js'),
  output: {
    path: path.resolve(dashboardDir, 'dist'),
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
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};