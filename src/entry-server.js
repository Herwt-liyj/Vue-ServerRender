import { createApp } from './app'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp()

        //设置服务器的 router 的配置
        router.push(context.url)

        //等到router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()

            //匹配找不到，执行reject 函数，返回404
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }

            resolve(app)
        }, reject)
    })
}