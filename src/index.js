import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';

//STORE -- Globalized state

//ACTION  
 const increment =  ()  =>   {
   return    { 
     type: 'INCREMENT'
   };
 };

 const decrement =  ()  =>   {
  return    { 
    type: 'DECREMENT'
  };
};

//REDUCER
const counter  =  (state =  0, action  )  =>  {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
      case 'DECREMENT':
          return state - 1
    
  }
};

let store = createStore(counter);

//Display it in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
