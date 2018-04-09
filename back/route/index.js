const router = require('koa-router')();

const home = require("./home");
const user = require("./user");
const login = require('./login');

router.use("/",home.routes(),home.allowedMethods());
router.use(user.routes(),user.allowedMethods());
router.use(login.routes(),login.allowedMethods());

module.exports = router;