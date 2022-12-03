const serverlessWebpack = require("serverless-webpack")
const nodeExternals = require("webpack-node-externals")

module.exports = {
    entry: serverlessWebpack.lib.entries,
    target: "node",
    externals: [nodeExternals()],
    mode: serverlessWebpack.lib.webpack.isLocal ? "development" : "production",
    module: {
        rules: [
            {
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    }
}
