const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry: {
        index: path.resolve(__dirname, './src/index.js')

    },
    output:{
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            template: path.resolve(__dirname, './src/template.html')
        })
    ],
    module:{
        rules: [{
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource'
        },
        // {
        //     test: /\.css$/,
        //     use: ["style-loader", "css-loader"]
        // },
        {
            test: /\.(scss)$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                
                {
                    loader: 'sass-loader'
                }
            ]
        }

        ]
    }
        

}