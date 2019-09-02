import React, {useReducer, memo, useCallback} from 'react'
import './Home.scss'
import Counter from "./component/Count";
import {TestContext} from "../../context";

import reducer, {initalState, setOne} from "./reducer";

const Home = memo(({history}) => {
    const goAboutPage = () => {
        history.push('/About')
    }

    const [state, dispatch] = useReducer(reducer, initalState)
    // console.log(state)

    const changeName = useCallback(()=>{
        dispatch(setOne({name:'Yasuo'}))
    },[state.name])

    return (
        <div>
            <p>Home</p>
            <TestContext.Provider value={'！！！！！i am context！！！！！'}>
                <Counter/>
            </TestContext.Provider>
            <p onClick={goAboutPage}>
                点击跳转到about
            </p>

            <div>age ：{state.age}，name：{state.name}</div>
            <button style={{border:'1px solid red'}} onClick={changeName}>change name</button>

        </div>
    )
})

export default Home;