import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ana from './ana';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu projeto em ReactJS
        </p>
        <Ana />
      </header>
    </div>
  );
}

export default App;
