import { createStore } from 'redux';
import initialState from '../store';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        dummy: {
          counter: {
            current: state.dummy.counter.current + 1,
          }
        }
      };
    case 'DECREMENT':
      return {
        ...state,
        dummy: {
          counter: {
            current: state.dummy.counter.current - 1,
          }
        }
      };
    default:
      return state;
  }
};

export default createStore(reducer);
