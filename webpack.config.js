
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './assets/'),
        filename: 'js/bundle.js'
    },
    plugins: [
      new ExtractTextPlugin('./css/style.css')
    ],
    module: {
      loaders: [
         { test: /\.css$/, 
           loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') 
         }
      ]
    },
     postcss: () => {
      return [
        require('autoprefixer')
      ];
    } 
}