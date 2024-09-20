import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { FavouritesContextProvider } from '../pages/FavouritesPage/context/FavouritesContext';
import { CartContextProvider } from '../pages/CartPage/context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <FavouritesContextProvider>
        <div className="wrapper">
          <header className="header">
            <Header />
          </header>

          <main className="page">
          <Outlet />
          
          </main>

          <Footer />
        </div>
      </FavouritesContextProvider>
    </CartContextProvider>
  );
}

export default App;
