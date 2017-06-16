
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: 'dist'
    },
    
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
               use: [
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            })
        }]
    },

    devServer: {
        compress: false,
        port: 9000
    },

    plugins: [
        new ExtractTextPlugin('css/style.css'),
    ]
}