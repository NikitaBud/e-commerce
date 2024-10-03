// App.js
import React from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import SuperCoins from './Components/SuperCoin';
const App = () => {
  return (
 
      <div>
        <h1 className='app-heading'>E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
        <SuperCoins />
      </div>

  );
};

export default App;
