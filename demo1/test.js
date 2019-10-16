const Vue = require('vue')
const app = new Vue({
    template:`<div>Hello world</div>`
})

const vueRenderer = require('vue-server-renderer')
const renderer = vueRenderer.createRenderer()

renderer.renderToString(app,(err,doc)=> {
    if(err) throw err
    console.log(doc);
})