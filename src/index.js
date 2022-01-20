import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import AppHook from './AppHook';

import store from './reducers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppHook />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
