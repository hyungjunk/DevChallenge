const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',

        // trailing slash is important
        // if publicPath is not specified, it will be an auto in webpack 5
        // you can change publicPath if you want to use a CDN
        publicPath: './dist/'
    },
    mode: 'none',
    module: {
        // specifying how to import file with designated extension.
        // this means that webpack will iterate each rule whenever it encounters an import statement.
        rules: [
            {
                test:/\.(png|jpg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
}