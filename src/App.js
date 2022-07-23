import React, { PureComponent } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_CATEGORY_QUERY } from './query';

import { Cart, Category, Minicart, Product } from './route';

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
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="minicart" element={<Minicart />} />
        </Routes>
      );
  }
}

export default App;
