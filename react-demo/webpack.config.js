const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    plugins: [new HtmlWebPackPlugin({ template: "./src/index.html" })],
}