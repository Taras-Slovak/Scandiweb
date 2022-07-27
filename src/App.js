import React, { PureComponent } from 'react';

import { Routes, Route } from 'react-router-dom';

import { CartPage, CategoryPage, MinicartPage, ProductPage } from './route';

export class App extends PureComponent {
  render() {
      return (
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<CategoryPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="minicart" element={<MinicartPage />} />
          </Routes>
        </div>

      );
  }
}

export default App;
