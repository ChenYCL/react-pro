import React, { useReducer, memo, useCallback } from 'react';
import './Home.scss';
import Counter from './component/Count';
import { TestContext } from '../../context';

import reducer, { initalState, setOne } from './reducer';

const Home = memo(function Home({ history }) {
  const goAboutPage = () => {
    history.push('/About');
  };

  const [state, dispatch] = useReducer(reducer, initalState); // useReducer是useState的替代品，不等价redux的state
  console.log(state);

  const changeName = useCallback(() => {
    dispatch(setOne({ name: 'Yasuo' }));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <TestContext.Provider value="！！！！！i am context！！！！！">
        <Counter />
      </TestContext.Provider>

      <button
        type="button"
        onClick={goAboutPage}
        style={{ textDecoration: 'underline', color: 'green' }}
      >
        Click to About Page
      </button>

      <div>
        age ：{state.age}
        ，name：
        {state.name}
      </div>
      <button
        type="button"
        onClick={() => dispatch({ type: 'SET_ONE', payload: { age: 22 } })}
      >
        使用useReducer的修改模式
      </button>
      <button type="button" onClick={changeName}>
        change name
      </button>
    </div>
  );
});

export default Home;
