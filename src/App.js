import React from 'react';
import logo from './logo.svg';
import { Index} from  './components/Index';
import {GlobalProvider} from  './context/GlobalState';
import {useSelector, useDispatch} from  'react-redux';
import {increment, decrement} from  './actions';
import './App.css';

function App() {
  const counter = useSelector(state  => state.counter);
  const isLogged = useSelector(state  => state.isLogged);
  const dispatch  = useDispatch();
  return (
      <div className='App'>
      <h1>Counter  { counter} </h1>

      <button onClick={()  =>  dispatch(increment(5))}  >+</button>
      <button onClick={()  =>  dispatch(decrement())}  >-</button>
      { isLogged ?   <h3>Valuable information i shouldnt see</h3> : '' } 
    
      </div>

    /* // <GlobalProvider>
    //  <Index />
    // </GlobalProvider> */
  );
}

export default App;
