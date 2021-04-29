var webpack = require("webpack");
const path = require("path");
module.exports = {
    mode: "development",
    entry: {
        vendor: ["@arcgis/core/WebMap", "@arcgis/core/views/MapView", "@arcgis/core/widgets/Search", "react"],
    },
    output: {
        filename: "vendor.bundle.js",
        path: path.join(__dirname, "vendor"),
        library: "vendor_lib"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "vendor_lib",
            path: path.join(__dirname, "vendor", "vendor-manifest.json"),
        }),
    ],
};
