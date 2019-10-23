const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    entry:{
        app:'./src/index.js',
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new CleanWebpackPlugin(),  //清理目录
        new HtmlWebpackPlugin({    //生成html
            title:'模块热替换' 
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
};