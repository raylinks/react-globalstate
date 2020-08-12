import React from 'react';
import logo from './logo.svg';
import { Index} from  './components/Index';
import {GlobalProvider} from  './context/GlobalState';
import './App.css';

function App() {
  return (
// <div></div>
    <GlobalProvider>
     <Index />
    </GlobalProvider>
  );
}

export default App;
