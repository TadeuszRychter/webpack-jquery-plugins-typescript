var webpack = require("webpack");

module.exports = {
    entry: {
        app: './app.ts'
    },
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts'],
        alias: {
            jquery: "./jquery.js"
        }
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "./jquery.js",
            $: "./jquery.js",
        })
    ]
}