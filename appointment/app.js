const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const koaBody = require('koa-body');

// const homeRouter = router.get('/', async (ctx) => {
//     ctx.body = '首页';
// });
const testRouter = router.get('/test/:id', async (ctx) => {
    console.log(ctx.params);
    console.log(ctx);
    ctx.body = 'test';
});

const mysql = require('./common/db');

const loginRouter = router.get('/login/',koaBody(),async(ctx)=>{
    console.log(ctx.request.body);
    console.log("--------------------");
    console.log(ctx.params);
    let result;
    result = await mysql.query("SELECT * FROM `t_user` WHERE phone='"+ctx.params.phone+"' AND `passWord`='"+ctx.params.pwd+"' AND id=1;");        
    ctx.body = result;
    
})

app.use(koaBody({multipart:true}));
router.get('/', koaBody,
  function *(next) {
    console.log(this.request.body);
    // => POST body
    this.body = JSON.stringify(this.request.body);
  }
);

app.use(router.routes());
app.listen(3003);

// app.use(homeRouter.routes(), homeRouter.allowedMethods());
// app.use(testRouter.routes(), testRouter.allowedMethods());
// app.use(loginRouter.routes(), loginRouter.allowedMethods());

// app.listen(3003);

