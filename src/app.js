import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

export function createApp() {
    //创建router实例
    const router = createRouter()
    //创建app
    const app = new Vue({
        //注入router实例到根vue实例
        router,
        render: h => h(App)
    })

    //返回app和router
    return { app, router }

}