var path = require("path");
var webpack = require("webpack");
// var fileName = "main.js";
var fileName = "js/main.js";
var src = path.resolve(__dirname, "src");
var dist = path.resolve(__dirname, "dist");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(src, fileName)
        // app: "./src/js/app.js"
    },
    output: {
        path: dist,
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                //BabelでJSコードをES2015+ -> ES5変換
                test: /\.js$/,
                exclude: /node_module | bower_components/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css"
            },
            {
                test: /\.(jpg|png)$/,
                loader: "file-loader?name = [path][hash].[ext]"
            },
            {
                //EaselJSの読み込み,
                test: require.resolve("createjs-easeljs"),
                loader: "imports-loader?this=>window!exports-loader?window.createjs"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(src, "index.html"),
            filename: "index.html"
        })
    ]
};
