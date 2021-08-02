const router = require('koa-router')()
const getData = require('../server/service/linkQueryService')

router.prefix('/linkQuery')

router.get('/', async (ctx) => {
        ctx.type = 'html';
        ctx.body = '<h1>hello world!</h1>';
    })
    .get("/:key", async (ctx) => {
        const {
            key
        } = ctx.params

        const retData = await getData(key)
        ctx.body = retData.rows
        // ctx.body = `获取key为[${key}]的关联分析数据`;
    });

module.exports = router