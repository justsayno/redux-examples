var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: './public',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: ['es2015'] }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./node_modules/office-ui-fabric-core/src/sass")]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devtool: 'source-map'
}