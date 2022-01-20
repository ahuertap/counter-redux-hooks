import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment()}>Incrementar</button>
      <button onClick={() => decrement()}>Decrementar</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
