
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
               use: 'css-loader'
           })
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
    ]
}