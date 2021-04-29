const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    output: { publicPath: "/" },
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
                use: ["style-loader", "css-loader", "sass-loader"],
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
        new ArcGISPlugin({
            useDefaultAssetLoaders: false
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, 'vendor'),
            manifest: path.join(__dirname, 'vendor', 'vendor-manifest.json')
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        port: 4000,
        hot: true,
        open: true
    },
    resolve: {
        extensions: [".jsx", ".js", "css"],
    }
};