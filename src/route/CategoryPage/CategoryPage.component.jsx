import React, { PureComponent } from 'react';
import { Currency, Curt, Logo, Navigation } from '../../component';
import './CategoryPage.style.scss';

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
            </main>
          </>
        );
    }
}

