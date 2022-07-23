import React, { PureComponent } from 'react';
import { Currency, Navigation } from '../../component';

export class Category extends PureComponent {
    render() {
        return (
          <>
            <header className="header">
              <Navigation />
              <Currency />
            </header>
            <main className="main">
              MiniCart
            </main>
          </>
        );
    }
}

