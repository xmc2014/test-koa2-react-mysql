const LoginService = require("../service/login");

const login = async(ctx) => {
    let result;
    result = await LoginService.login(ctx);
    return result;
}


module.exports = LoginController = {
    login
};