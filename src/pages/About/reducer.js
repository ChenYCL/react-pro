const SET_HOBBIES = 'SET_HOBBIES';

// state
const initialState = {
  hobbies: 'basketball',
};

// action
export const setHobby = hobbies => {
  return {
    type: SET_HOBBIES,
    payload: hobbies,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_HOBBIES:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
