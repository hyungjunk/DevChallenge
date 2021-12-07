const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    'index': './src/index.js', 
    'diablo': './src/diablo.js'
  },
  mode: 'production',
  output: {
    filename: 'bundle.[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath를 제거하니 bundle을 정상적으로 찾음.
    // 신기한 건 브라우저에서 모두 bundle.js를 찾는데.. 
    // dev-server hot reload도 정상작동. 이 옵션에 대해 더 알아보자.
    
    // HtmlWebpackPlugin에서 import할 script, link의 prefix로 쓰임
    publicPath: './',
    
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
        }
        }
      },
      {
        test: /\.(jpg|svg)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
              // 리소스가 4mb 이상이면 resource (외부 URL로), 그보다 작으면 inline Data URI를 만듬. 
              // (byte 단위)
              maxSize: 4 * 1024
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
            // 오른쪽부터 loader가 적용됨에 주의할 것.
            MiniCssExtractPlugin.loader, 'css-loader','sass-loader'
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // which chunk should be optimized? 
    },
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
    minimize: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', path.join(process.cwd(), 'build/**')],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      title: 'Index',
      meta: {
        description: 'Description created by webpack configuration'
      },
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'diablo.html',
      // chunk name should be same as property key in entry
      chunks: ['diablo'],
      title: 'Diablo',
      description: 'Description created by webpack configuration',
      minify: false
    }),
  ]
};