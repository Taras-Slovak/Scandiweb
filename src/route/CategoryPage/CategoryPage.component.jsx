import React, { PureComponent } from 'react';
import { Currency, Curt, Logo, Navigation } from '../../component';
import { useGetProductsList } from '../../query';
import './CategoryPage.style.scss';

function DisplayProductsList() {
  const { loading, error, data } = useGetProductsList();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.category.products.map(({ name, id, gallery }) => (

    <div className="card" key={id}>
      <h2 className="card__title">{name}</h2>
      <img className="card__image" src={gallery[0] === true ? gallery[0] : '../../assets/no-image.png'} />

    </div>

  ));
  // console.log(data.category.products, '!!!!!!!');
}

export class CategoryPage extends PureComponent {
    render() {
        return (
          <>
            <header className="header">
              <Navigation />
              <Currency />
              <Logo />
              <Curt />
            </header>
            <main className="main">

              <h1 className="main__title">Category</h1>
              <div className="main__cards">
                <DisplayProductsList />
              </div>

            </main>
          </>
        );
    }
}

