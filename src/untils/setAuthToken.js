import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // token存在设置header，后续请求需要的话
    // eslint-disable-next-line
    axios.defaults.headers['token'] = token;
  } else {
    // 无token
    // eslint-disable-next-line
    delete axios.defaults.headers['token'];
  }
};
export default setAuthToken;
