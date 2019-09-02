import React, {useCallback} from 'react'
import './About.scss'
import {useSelector, useDispatch} from 'react-redux'
import {setHobby} from './reducer'

const About = React.memo(() => {

    const state = useSelector(state => state.About)
    console.log(state)
    const dispatch = useDispatch();

    // const changeHobbies = useCallback(() => {
    //     dispatch(setHobby({hobbies:'watch movies'}))
    // }, [dispatch])

    return (
        <div>
            <p>About me page</p>
            <p>use react-redux useDispath,useSelector,and action</p>

            <div>hobbies: {state.hobbies}</div>
            <div onClick={()=>dispatch(setHobby({hobbies:'划水'}))}>点击直接执行dispath</div>
            {/*<button onClick={changeHobbies} style={{border: '1px solid red'}}>Change Hobbies</button>*/}
        </div>
    )
})

export default About;