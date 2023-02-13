import React from 'react';

import Product from './components/Product';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
        <Product />
      </header>
    </div>
  );
}

export default App;
