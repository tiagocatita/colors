var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html' }
           
        ], {
            copyUnmodified: true
        })
    ]
};