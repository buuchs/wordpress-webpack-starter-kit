
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'js/bundle.js'
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
    plugins: [
        new ExtractTextPlugin('css/style.css'),
    ]
}