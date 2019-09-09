import React, { useEffect, memo, useState, useContext } from 'react';
import { TestContext } from '../../../context';
// one context
const Counter = memo(() => {
  // initial state
  const [count, setCount] = useState(0);

  const context = useContext(TestContext);
  // console.log(context, 'context');

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>you click {count} times</p>
      <button
        type="button"
        style={{ border: '1px solid red' }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <div>
        Context's value
        {context}
      </div>
    </div>
  );
});

export default Counter;
