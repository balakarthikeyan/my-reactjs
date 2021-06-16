const path = require("path")
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        path : path.resolve(__dirname, '/dist'),
        filename: "bundle.js"
    },
    devServer: {  
      inline: true,  
      port: 8000 ,
      // Enable compression
      compress: true,
      // Enable hot reloading
      hot: true, 
    },
    module: {
        rules : [
            {
                //babel - babel loader
                test :/\.(js)$/, 
                exculde: '/node_modules/',
                use : {
                    loader :'babel-loader'
                } 
            },
            //styles - css loader
            { test :/\.(css)$/, use : ['style-loader', 'css-loader']}
        ]
    },
    mode : 'development',
    plugins :[
        new HtmlWebpackPlugin({
            template : './app/index.html'
        })
    ]
}