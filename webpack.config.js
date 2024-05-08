const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    entry: "./src/serve.ts",
    target: "node", // Target node
    externals: [nodeExternals()], // Do not bundle external modules
    node: {
        global: true,
        __dirname: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader", // Use ts-loader to handle TypeScript files
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
};
