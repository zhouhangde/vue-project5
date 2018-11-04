var path = require('path');
var webpack = require('webpack');

// 解决加载单文件组件报错
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
      ],
    //  devtool 用于方便调试错误出现的文件，否则会出现在build.js
    devtool: '#eval-source-map',
    module: {
        rules: [
            {
                // 这段代码意思是：匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
                // 解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                // exclude表示忽略node_modules文件夹下的文件，不用转码
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // 把图片也当成模块引入
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                // 使用单文件组件
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            }
           
        ]
        
    }
};