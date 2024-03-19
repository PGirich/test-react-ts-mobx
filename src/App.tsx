import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './body';
import { Input1 } from './Input1';
import Input2 from './input2';
import Cont1 from './Cont1';
import Cont2 from './cont2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Body>
        <Cont1>
          <Input1></Input1>
        </Cont1>
        <Cont2>
          <Input2></Input2>
        </Cont2>  
      </Body>
    </div>
  );
}

export default App;
