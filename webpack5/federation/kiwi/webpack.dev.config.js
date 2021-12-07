const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/kiwi.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9002/'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'kiwi.html',
        port: 9002
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader', 'css-loader','sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            title: 'Kiwi',
            description: 'Kiwi',
            template: 'src/page-template.hbs'
        }),
        new ModuleFederationPlugin({
            name: 'KiwiApp',
            // remote로 사용(consume)할 remote application을 지정
            remotes: {
                HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
            }
        }),
    ],

    // federation에서 expose 된 app을 await import('App')식으로 사용하기 위해서는 현재 필요한 옵션
    experiments: {
        topLevelAwait: true,
    },
};
