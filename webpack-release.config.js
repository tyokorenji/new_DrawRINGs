var path = require("path");
var webpack = require("webpack");
var fileName = "main.js";
var src = path.resolve(__dirname, "src");
var dist = path.resolve(__dirname, "dist");
var UgilifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        app:path.joinrc, fileName
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
                loader: "babel-loader",
                //リリースの際はコメント情報を完全除去する
                query: {
                    comments: false,
                    compact: true
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css"
            },
            {
                test: /\.(jpg | png)$/,
                loader: "file-loader?name = [path][hash].[ext]"
            },
            {
                //EaselJSの読み込み,
                test: require.resolve("createjs-easejs"),
                loader: "imports-loader?this=>window!exports-loader?window.createjs"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(src, "index.html"),
            filename: "index.html"
        }),
        new UgilifyJSPlugin()
    ]
};
