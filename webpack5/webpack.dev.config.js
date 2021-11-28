const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
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
              maxSize: 4 * 1024 * 100
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
            // 오른쪽부터 loader가 적용됨에 주의할 것.
            'style-loader', 'css-loader','sass-loader'
        ]
      },
    ]
  },
  devServer: {
    static: { // what exactly should be served
      // directory:  path.resolve(__dirname, 'dist')
      directory:  './dist'
    },
    port: 3000,
    devMiddleware: {
      index:'index.html',
      writeToDisk: true,  // unless memory에 생성되고 파일로는 생성 안되기 때문에 헷갈린다.
    },
    liveReload: true
  },
  plugins: [
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