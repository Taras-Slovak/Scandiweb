import React, { PureComponent } from 'react';
import { useGetCategories } from '../../query';

import './Navigation.style.scss';

function DisplayCategories() {
  const { loading, error, data } = useGetCategories();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categories.map(({ name }) => (
    <span value={name} key={name}>{name}</span>
  ));
}

export class Navigation extends PureComponent {
    render() {
        return (
          <nav className="navigation">
            <DisplayCategories />
          </nav>
        );
    }
}

