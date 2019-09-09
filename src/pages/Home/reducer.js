const SET_ONE = 'SET_ONE';

export const initalState = {
  name: '葫芦娃',
  age: 18,
};

// actions
export const setOne = data => {
  return {
    type: SET_ONE,
    payload: data,
  };
};

// reducers
const reducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ONE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
