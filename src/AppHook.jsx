import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './actions';
import { countSelector } from './selectors';

const AppHook = () => {

  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  const handleIncrement = (event) => {
    return dispatch(increment());
  }

  const handleDecrement = (event) => {
    return dispatch(decrement());
  }

  console.log(count);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
};

export default AppHook;
