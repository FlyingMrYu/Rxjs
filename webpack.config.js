const path = require("path");
const webpack = require('webpack'); // 访问内置的插件
const HtmlWebpackPllugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/js/index.ts",
    output: {
        clean: true,
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash:5].js",
    },
    module: {
        rules: [  // 添加解析规则
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '.'),
        open: true,
        port: 8888
    },
    resolve: {   // 需要打包的文件后缀
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPllugin({
            title: 'webpack',
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}