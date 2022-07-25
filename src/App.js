import React, { PureComponent } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_CATEGORY_QUERY } from './query';
import { CartPage, CategoryPage, MinicartPage, ProductPage } from './route';

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_CATEGORY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categories.map(({ name }) => (
    <div key={name}>
      <h3>{name}</h3>
    </div>
  ));
}

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
