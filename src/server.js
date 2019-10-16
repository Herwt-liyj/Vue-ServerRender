const {createBundleRenderer } = require('vue-server-renderer')


const template = require('fs').readFileSync('/path/to/template.html','utf-8')

const serverBundle = require('/path/to/vue-ssr-server-bundle.json')

const clientManifest = require('/path/to/vue-ssr-client-manifest.json')


const renderer = createBundleRenderer(serverBundle,{
    //
    runInNewContext: false,  //推荐
    template, // 可选
    clientManifest   //可选客户端构建manifest
})

server.get('/',(req,res)=> {
    const context = { url: req.url}

    //这里无需传入一个应用程序，执行bundle时已经自动创建
    renderer.renderToString(context,(err,html)=> {
        res.end(html)
    })
})
//https://segmentfault.com/a/1190000015964813?utm_source=tag-newest 