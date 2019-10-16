const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig,{
    // 将entry 指向应用程序的 server entry 文件
    entry:'/path/to/entry-server.js',

    //折允许 webpack 以 Node 适用方式处理动态导入，并编译vue组件
    // 告知 vue-loader 输出面向服务器代码
    target: 'node',

    //对 bundle renderer 提供 source map支持
    devtool: 'source-map',

    output: {
        libraryTarget:'commonjs2'
    }
})