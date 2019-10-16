const express = require('express')
const fs = require('fs')
const vueRenderer = require('vue-server-renderer')
const renderer = vueRenderer.createRenderer()
const server = express()

const createApp = require('./app')

server.get('/mytest', (request, response) => {
    response.send('hello world' + request.url)
})

//ssr渲染
server.get('/ssr', (request, response) => {
    const context = {url: request.url}
    console.log(context)
    const app = createApp(context)
    renderer.renderToString(app,(err,doc) => {
        if(err) throw err
        response.send(doc)
    })
})

//插入模板
const rendererTmp = vueRenderer.createRenderer({
    template:fs.readFileSync('./demo1/index.template.html','utf-8')
})
server.get('/template',(request,response)=> {
    const context = {
        url: request.url
    }
    const app = createApp(context);
    rendererTmp.renderToString(app,(err,doc)=> {
        if(err) throw err
        console.log('doc',doc)
        response.send(doc)
    })
})

var appServer = server.listen(8000, function () {
    var host = appServer.address().address;
    var port = appServer.address().port;
    console.log('Server running http://%s:%s', host, port);
})