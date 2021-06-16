import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="App-logo" alt="logo" width="50" />
          <span>Learn React</span>
        </a>
      </header>
      <Home />
    </>
  );
}

export default App;
