import { useQuery } from '@apollo/client';
import React, { PureComponent } from 'react';
import { GET_CATEGORY_QUERY } from '../../query';
import './Navigation.style.scss';

function DisplayCategories() {
  const { loading, error, data } = useQuery(GET_CATEGORY_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categories.map(({ name }) => (
    <div key={name}>
      <h3>{name}</h3>
    </div>
  ));
}

export class Navigation extends PureComponent {
    render() {
        return (
          <div className="navigation">
            <DisplayCategories />
          </div>

        );
    }
}

