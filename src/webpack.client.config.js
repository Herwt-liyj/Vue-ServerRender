const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig,{
    entry:'/path/to/entry-client.js',
    plugins:[
        new webpack.optimize.CommontsChunkPlugin({
            name:"manifest",
            minChunks:Infinity
        }),

        //插件输出目录，生成 vue-ssr-client-manifest.json
        new VueSSRServerPlugin()

    ]
})