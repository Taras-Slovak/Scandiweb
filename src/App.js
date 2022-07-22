import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_CATEGORY_QUERY } from './query';

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

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayLocations />
    </div>
  );
}
