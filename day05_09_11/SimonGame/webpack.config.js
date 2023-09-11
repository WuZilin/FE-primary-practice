const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./dist/index.html",
            filename: "index.html",
            inject: false,
        }),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
        ],
    }
};

module.exports = config;
