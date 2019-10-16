import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [

]
export function createRouter() {
    return new Router({
        mode:'history',
        routes:routes
    })
}