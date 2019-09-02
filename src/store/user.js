const initialState={
    name:'Owen',
    age:25
}

// constant
const UPDATE_USER = 'UPDATE_USER'


// action
export const updateUser = (user)=>{
    // async
    return {
        type:UPDATE_USER,
        payload:user
    }

    // ===========asynchrony=============
    // return (dispatch,getState)=>{
    //     const {xx} = getState()
    //     dispatch({
    //         type:'xx-action',
    //         payload: 'xx-data'
    //     })
    // }
}

// reducer
const reducer = (state = initialState,action)=>{
    const {type,payload} = action;
    switch (type) {
        case UPDATE_USER:
            return {...state,...payload}
        default:
            return state
    }
}

export default reducer;