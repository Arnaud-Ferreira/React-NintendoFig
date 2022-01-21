// Imports 
import React from 'react';
import Header from '../Header';
import Games from '../Games';
import Characters from '../Characters';


function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Games />
        <Characters />
      </div>
    </div>
  );
}

export default App;
