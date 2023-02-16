import React from 'react';

import Product from './components/Product';
import Navbar from './components/Navbar/Navbar';


import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Product />
      </header>
    </div>
  );
}

export default App;
