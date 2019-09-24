// 引入path模块
const path = require("path");

// 导入提取样式的webpack插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 导入webpack指定默认html模板的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 导入清除插件
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 导入复制文件夹的插件
const CopyPlugin = require("copy-webpack-plugin");

// 向外暴露对象
module.exports = {

    // 项目入口
    entry: {
        main: "./src/main.js"
    },

    // 输出配置
    output: {
        filename: "js/[name].bundle.js", // 默认打包后的文件名为bundle.js
        path: path.resolve(__dirname, "../dist") // 默认打包后的文件目录是dist
    },


    // 提取公共模块配置
    optimization: {
        splitChunks: {
            chunks: 'all' // 提取所有文件的共同模块
        }
    },

    //  + 添加模块解释
    resolve: {
        // 提供别名，方便查找模块的路径
        alias: {
            // 1.以后@符号就是src目录
            '@': path.resolve(__dirname, "../src")
        },
        // 2.省略导入模块时的后缀名。
        extensions: ['.js', '.json', '.vue']
    },

    // 模块加载器配置项
    module: {
        rules: [

            // 配置css文件
            {
                test: /\.css$/, // 匹配.css拓展名文件
                use: ExtractTextPlugin.extract({ // 提取css
                    fallback: "vue-style-loader", // 替换原来配置中的 style-loader
                    use: ["css-loader"]
                })
            },

            // 配置less文件
            {
                test: /\.less$/, // 匹配.less拓展名文件
                use: ExtractTextPlugin.extract({ // 提取less
                    fallback: "vue-style-loader", // 替换原来配置中的 style-loader
                    use: ["css-loader", "less-loader"]
                })
            },

            // 配置图片
            {
                test: /\.(png|svg|jpg|gif)$/, // 匹配图片文件
                use: [{
                    loader: "file-loader", // 处理图片文件返回链接
                    options: {
                        publicPath: "./images/", //  引入图片时会在路径前面加上该选项
                        outputPath: "images" //  输出到dist下的images目录
                    }
                }]
            },

            // 配置音频
            {
                test: /\.mp3$/, // 匹配音频文件
                use: [{
                    loader: "file-loader", // 处理音频文件返回链接
                    options: {
                        publicPath: "./audio/", //  引入音频时会在路径前面加上该选项
                        outputPath: "audio" //  输出到dist下的audio目录
                    }
                }]
            },

            // 匹配.vue结尾的文件
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },

        ]
    },

    plugins: [
        new ExtractTextPlugin('style/style.css'), // 提取css样式到dist的style文件夹中

        new CleanWebpackPlugin(),   // 使用模板生成html文件前清除打包目录

        new HtmlWebpackPlugin({
            template: "public/index.html" // template指定默认html模板
        }),

        // vue加载器插件
        new VueLoaderPlugin(),

        // 赋值插件,将static文件夹不经编译复制到dist下
        new CopyPlugin([
            { from: "static", to: "static" }
        ])
    ]

};