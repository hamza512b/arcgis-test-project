const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    cache: { type: "filesystem" },
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        publicPath: "/",
        clean: true,
    },
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                use: "babel-loader",
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(jp?g|png|gif|webp)$/,
                type: 'asset/inline',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'build/[name][ext]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new ArcGISPlugin({
            useDefaultAssetLoaders: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        })
    ],
    resolve: {
        extensions: [".jsx", ".js", "css"],
    }
};