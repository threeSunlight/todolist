const path = require('path')
const isDev = peocess.env.NODE_ENV === 'developement'
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = {
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
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|jpg|png|jpeg|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
        new HTMLWebpackPlugin()
    ]
}
if (isDev) {
    config.devServer = {
        port: 8080,
        host: '0.0.0.0',
        overlay: {
            errors: true
        }
    }
}

module.exports = config