const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "css/main.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/js/main.js',

    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: './js/bundle.js',
        publicPath: 'assets'
    },

    devtool: "inline-source-map",

    module: {
        rules: [{

             test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader", options: {sourceMap: true}
                }, {
                    loader: "postcss-loader", options: {sourceMap: true}
                }, {
                    loader: "less-loader", options: {sourceMap: true}
                }],
                // use style-loader in development
                fallback: "style-loader" 
            }),
        }],      
    },
    plugins: [
        extractLess,

    ],
    

    // devServer: {
    //     proxy: {
    //         '/': {
    //             target: {
    //                 host: "project-url",
    //                 protocol: "http:",
    //                 port: 80
    //             },
    //             changeOrigin: true,
    //             secure: false
    //         }
    //     }
    // }
}