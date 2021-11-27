const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV ?? 'production',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    // publicPath를 제거하니 bundle을 정상적으로 찾음.
    // 신기한 건 브라우저에서 모두 bundle.js를 찾는데.. 
    // dev-server hot reload도 정상작동. 이 옵션에 대해 더 알아보자.
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
        test: /\.scss$/,
        use: [
            // 오른쪽부터 loader가 적용됨에 주의할 것.
            'style-loader', 'css-loader', 'sass-loader'
        ]
    },
    ]
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
    })
  ]
};