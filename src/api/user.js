import axios from '../plugins/axios';
import api from './Constants';
// eg. user
class User {
  static test(param) {
    return this.commonRequest(api.getUserInfo, param);
  }

  // 登陆
  static loginIn(userInfo) {
    // eslint-disable-next-line no-debugger
    return this.commonRequest(api.loginIn, userInfo, {
      withCredentials: true,
      method: 'post',
    });
  }

  static commonRequest(apiStr, param = {}, rest) {
    return axios({
      url: apiStr,
      data: param,
      ...rest,
    });
  }
}

export default User;
