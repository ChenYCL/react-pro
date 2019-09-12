import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { loginOut } from '../store/user';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '',
  // eslint-disable-next-line
  withCredentials: process.env.NODE_ENV === 'development' ? true : true,
  method: 'POST',
  responseType: 'json',
  timeout: 10000,
  headers: {},
});

instance.defaults.headers.post['Content-Type'] =
  'application/json;charset=UTF-8';
instance.interceptors.request.use(
  config => {
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      return config;
    }
    // 如果是post请求
    // eslint-disable-next-line no-param-reassign
    config.data = {
      data: config.data,
      // cookie : document.cookie
    };
    return config;
  },
  error => {
    console.error('error', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  res => {
    // const dispatch = useDispatch();
    if (res.data && res.data.code === 1000) {
      return Promise.resolve(res.data);
    } else if (res.data && res.data.code === 403) {
      //   改变登陆状态，跳转到登陆页面
      // dispatch(loginOut());
    } else if (res.data && res.data.code === 401) {
      // 未登录
      history.push('/login');
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      code: res.data.code,
      message:
        (res.data && res.data.message) ||
        `${res.config.url.replace(
          res.config.baseURL,
          ''
        )}<br />Response Error！(*^▽^*)`,
    });
  },

  // eslint-disable-next-line func-names
  function(error) {
    if (error.message.indexOf('timeout of') === 0) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        message: '业务繁忙，请稍后重试',
        code: -1,
      });
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      message: error.message,
      code: error.code,
    });
  }
);

export default instance;
