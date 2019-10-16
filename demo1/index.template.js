const Vue = require('vue')
const app = new Vue({
    template:`<div>Hello World</div>`
})

const fs= require('fs')

const vueRenderer = require('vue-server-renderer')
const renderer = vueRenderer.createRenderer({
    template:fs.readFileSync('./demo1/index.template.html','utf-8')
})

renderer.renderToString(app,(err,doc)=> {
    if(err) throw err
    console.log(doc);
})
