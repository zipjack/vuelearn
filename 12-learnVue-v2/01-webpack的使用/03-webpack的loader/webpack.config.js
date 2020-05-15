// 动态获取路径,node包中自带的
const path = require('path')
// package.json文件通过在终端输入npm init命令生成

// webpack的配置文件,在终端直接输入webpack即可
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader只负责将css文件进行加载，不负责解析
                //style-loader负责解析
                //使用多个loader时时从右向左读的
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                },
                    {
                        loader: 'css-loader'
                    }
                    ,
                    {
                        loader: 'less-loader'
                    }]
            },
            {
                test:'\/,js$/',
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}