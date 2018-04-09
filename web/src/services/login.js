import Server from '../utils/server';
// import '../mock/login';

class Login extends Server {
    constructor() {
      super();
    }

    async login(params) {
        let result = [];
        try {
            result = await this.post('/login/',{phone:params.loginName,pwd:params.loginPwd});
        } catch (error) {
            throw error;
        }
        return result;
    }
}
export default new Login;