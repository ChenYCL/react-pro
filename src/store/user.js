const initialState = {
  user: {},
  isAuth: false,
};

// constant
const LOGIN_IN = 'LOGIN_IN';
const LOGIN_OUT = 'LOGIN_OUT';

// action
export const loginIn = decode => {
  // async
  return {
    type: LOGIN_IN,
    payload: decode,
  };

  // ===========asynchrony=============
  // return (dispatch,getState)=>{
  //     const {xx} = getState()
  //     dispatch({
  //         type:'xx-action',
  //         payload: 'xx-data'
  //     })
  // }
};

// 退出登陆
export const loginOut = () => {
  return {
    type: LOGIN_OUT,
  };
};

// 登陆账号
// export const loginIn = ()=>{
//   return (dispatch,getState)=>{
//     const
//   }
// };

// reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_IN:
      return {
        ...state,
        user: payload,
        isAuth: true,
      };
    case LOGIN_OUT:
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducer;
