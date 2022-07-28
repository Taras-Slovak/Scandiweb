import React, { PureComponent } from 'react';
import { Currency, Curt, Logo, Navigation } from '../../component';
import { useGetProductsList } from '../../query';
import noImage from '../../assets/no-image.png';
import './CategoryPage.style.scss';

function DisplayProductsList() {
  const { loading, error, data } = useGetProductsList();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.category.products.map(({ name, id, gallery, prices }) => (

    <div className="card" key={id}>
      <figure className="card__figure">
        <img
          className="card__image"
          src={gallery[0] || noImage}
          onError={(e) => { e.target.onerror = null; e.target.src = noImage; }}
        />
        <figcaption className="card__name">{name}</figcaption>
      </figure>

      {prices.filter((price) => price.currency.label === 'USD').map((filteredPrice) => (
        <div className="card__currency">
          <p className="card__symbol">{filteredPrice.currency.symbol}</p>
          <p className="card__amount">{filteredPrice.amount}</p>
        </div>
        ))}
    </div>

  ));
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

