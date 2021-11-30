const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV ? 'production' : 'development',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    // HtmlWebpackPlugin에서 import할 리소스의 prefix로 쓰임
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
              maxSize: 4 * 1024 * 100
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
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
    minimize: true
  },
  devServer: {
    static: {
      directory: './',
    },
    port: 3000,
    liveReload: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', path.join(process.cwd(), 'build/**')],
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack is Awesome',
      filename: 'index.html',
      meta: {
        description: 'Description created by webpack configuration'
      }
    }),
  ]
};