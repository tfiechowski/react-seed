const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'dev';
const PORT = process.env.PORT || 3000;

// eslint-disable-next-line
console.log('NODE_ENV ', NODE_ENV);

const plugins = [
  HtmlWebpackPluginConfig,
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en|es|fr)$/),
];

if (process.env.ANALYZER) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin());
}

if (NODE_ENV === 'PROD') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

const distDirectory = path.join(__dirname, 'dist');

const WebpackConfig = {
  mode: NODE_ENV === 'prod' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: distDirectory,
    filename: 'app.min.js',
  },
  node: {
    fs: 'empty',
  },
  devtool: NODE_ENV === 'dev' ? 'inline-source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins,
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: PORT,
    proxy: {
      '/test-api': {
        target: 'http://backend:8080/v1',
        pathRewrite: { '^/test-api': '' },
      },
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = WebpackConfig;
