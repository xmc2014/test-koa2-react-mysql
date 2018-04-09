const {query} = require("../util/db");

const login = async(ctx) => {
    console.log(ctx.request.body);
    return await query("SELECT *  FROM `t_s_base_user` WHERE username='"+ctx.request.body.name+"' AND `password`='"+ctx.request.body.pwd+"';");
}

module.exports = Login = {
    login
};