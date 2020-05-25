const webpack = require('webpack');

module.exports = {
    entry: {
        web: './demo-web.js',
    },
    output: {
        path: __dirname,
        filename: './demo-[name].bundle.js',
        library: "Demo",
        libraryTarget: "umd",
        chunkFilename: '[name]-[chunkhash].js'
    },
    target: 'web',
    watch: false,
    devtool: "eval-source-map",
    devServer: {
        port: 5000
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

