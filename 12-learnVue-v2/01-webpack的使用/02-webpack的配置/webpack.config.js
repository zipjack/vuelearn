// 动态获取路径,node包中自带的
const path=require('path')
// package.json文件通过在终端输入npm init命令生成

// webpack的配置文件,在终端直接输入webpack即可
module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}