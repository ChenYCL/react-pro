import React, { useCallback, useEffect } from 'react';
import './About.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setHobby } from './reducer';
import user from '../../api/user';

// import {bindActionCreators} from 'redux'
// 多个 建议采用useMemo 配合bindActionCreators 优化

// memo优化
const About = React.memo(function About() {
  const state = useSelector(_state => _state.About);
  // console.log(state);
  const dispatch = useDispatch();
  // 使用useCallback进行记忆
  const changeHobbies = useCallback(() => {
    dispatch(
      setHobby({
        hobbies: 'watch movies',
      })
    );
  }, [dispatch]);

  // eg. 使用useMemo
  /*    const actionCbs = useMemo(()=>{
        return bindActionCreators({
            actionA: actionA,
            actionB:actionB
        })
    },[dispatch]) */

  useEffect(() => {
    user.test({ name: 1, age: 23 });
  }, []);

  return (
    <div>
      <p>About me page</p>
      <p>use react-redux useDispath,useSelector,and action</p>
      <div>
        hobbies:
        {state.hobbies}
      </div>
      <button type="button" onClick={changeHobbies}>
        Change Hobbies
      </button>
    </div>
  );
});

export default About;
