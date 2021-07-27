const router = require('koa-router')()

router.prefix('/test')

router.get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = '<h1>hello world!</h1>';
  })
    .get("/users", async (ctx) => {
      ctx.body = '获取用户列表';
    })
    .get("/users/:id", async (ctx) => {
      const { id } = ctx.params
      ctx.body = `获取id为${id}的用户`;
    })
    .post("/users", async (ctx) => {
      ctx.body = `创建用户`;
    })
    .put("/users/:id", async (ctx) => {
      const { id } = ctx.params
      ctx.body = `修改id为${id}的用户`;
    })
    .del("/users/:id", async (ctx) => {
      const { id } = ctx.params
      ctx.body = `删除id为${id}的用户`;
    })
    .all("/users/:id", async (ctx) => {
      ctx.body = ctx.params;
    });

    module.exports = router