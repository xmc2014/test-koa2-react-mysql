const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const koaBody = require('koa-body');

const homeRouter = router.get('/', async (ctx) => {
    ctx.body = '首页';
});
const testRouter = router.get('/test/:id', async (ctx) => {
    ctx.body = ctx.params.id;
});

const mysql = require('./common/db');

const loginRouter = router.post('/login/',koaBody(),async(ctx)=>{
    console.log(ctx.request.body);
    let result;
    result = await mysql.query("SELECT * FROM `t_user` WHERE phone='"+ctx.request.body.phone+"' AND `passWord`='"+ctx.request.body.pwd+"'");        
    ctx.body = result;
    
})

app.use(homeRouter.routes(), homeRouter.allowedMethods());
app.use(testRouter.routes(), testRouter.allowedMethods());
app.use(loginRouter.routes(), loginRouter.allowedMethods());

app.listen(3002);

