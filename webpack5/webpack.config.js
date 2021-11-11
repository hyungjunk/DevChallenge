const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: process.env.NODE_ENV === 'production' ? 'production.js' : 'development.js',
        // publicPath: './dist/'
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)/,
                type: 'asset',
                // parser를 정의하지 않고 그냥 type을 asset으로 두면 8kb를 경계로 그 이상이면 resource / 이하면 inline으로.
                parser: {
                    dataUrlCondition: {
                        // 리소스가 4mb 이상이면 resource (외부 URL로), 그보다 작으면 inline Data URI를 만듬. 
                        // (byte 단위)
                        maxSize: 4 * 1024
                    }
                }
            },
            // source는 string으로 다루게 된다.
            {
                test: /\.(txt|py)/,
                type:'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // 오른쪽부터 loader가 적용됨에 주의할 것.
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
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
            }
        ]
    }
}