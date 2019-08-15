const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: path.join(__dirname, './src/main.js'), 
    output: {    
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'   
    },
    plugins: [
        new htmlWebpackPlugin({     
            template: path.join(__dirname, '/src/index.html'),  
            filename: 'index.html'   
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|npg|gif|jpeg|bmp)$/, use: 'url-loader?limit=45678&name=[hash:8]-[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }   // 处理 .vue 文件的 loader
        ]
    },
    resolve: {
        alias: {    // 修改 vue 被导入时候的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}