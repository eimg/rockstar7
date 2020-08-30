import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(function(state = [], action) {
    switch(action.type) {
        case 'ADD':
            return [ ...state, action.data ];
        case 'DEL':
            return state.filter(i => i._id !== action._id);
        default:
            return state;
    }
});

store.dispatch({ type: 'ADD', data: {_id: 1, name: 'Alice', gender: 'f'} });
store.dispatch({ type: 'ADD', data: {_id: 2, name: 'Tom', gender: 'm'} });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
