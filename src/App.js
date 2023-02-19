import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import CheckoutCard from './components/CheckoutCard/CheckoutCard';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <CheckoutCard />
        {/* <Products /> */}
      </header>
    </div>
  );
}

export default App;
