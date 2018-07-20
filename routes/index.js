import Router from 'koa-router'
const router = new Router()
import makeRoutes from './makeRoutes'

export default app => {
    router.get(/\/([\w])*/, async ctx => {
        ctx.body = await ctx.render('index')
    })
    //app.use(makeRoutes('users'))
    app.use(router.routes())
}
