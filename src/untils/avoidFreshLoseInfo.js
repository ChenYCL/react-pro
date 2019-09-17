import jwtDecode from 'jwt-decode';
import store from '../store/store';
import setAuthToken from './setAuthToken';
import { loginIn, loginOut } from '../store/user';

const { dispatch } = store;

if (localStorage.jwToken) {
  setAuthToken(localStorage.jwToken);
  // 解析token
  const decoded = jwtDecode(localStorage.jwToken);
  dispatch(loginIn(decoded));
  // 检测token过期
  // 获取当前时间
  const currentTime = Date.now() / 1000; //由毫秒转成秒
  // console.log(decoded);
  // console.log(currentTime);
  // 判断当前时间是否大于token中的exp时间;如果大于是为过期
  if (decoded.exp < currentTime) {
    // 过期
    dispatch(loginOut());
    // 退出后再跳转页面
    // window.location.href = '/login';
  }
}
