/*土地利用现状查询-永久基本农田示例*/

const router = require('koa-router')()
const getData = require('../server/service/landStatusService')

router.prefix('/landStatus')

router.get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
})
    .get("/:themeName/:chartKey", async (ctx) => {
        const {
            themeName,
            chartKey
        } = ctx.params

        const retData = await getData(themeName, chartKey)
        ctx.body = retData
    });

module.exports = router
