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

    const changeName = useCallback(() => {
        dispatch(setOne({name: 'Yasuo'}))
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
            <TestContext.Provider value={'！！！！！i am context！！！！！'}>
                <Counter/>
            </TestContext.Provider>

            <div onClick={goAboutPage} style={{textDecoration: 'underline', color: 'green'}}>
                Click to About Page
            </div>

            <div>age ：{state.age}，name：{state.name}</div>
            <button style={{border: '1px solid red'}} onClick={changeName}>change name</button>

        </div>
    )
})

export default Home;