const router = require('koa-router')();


const LoginController = require("../controller/login");
const koaBody = require('koa-body')();

router.post("/login",koaBody,async(ctx)=>{
    ctx.body =  await LoginController.login(ctx);
});


module.exports = router;