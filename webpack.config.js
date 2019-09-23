const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                loaders: ["css-loader"]
            },
            {
                test: /\.css$/,
                use: ["css-loader", 'style-loader']
            },
            {
                test: /\.(gif|jpg|png|jpeg|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        [name]: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};