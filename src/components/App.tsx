import React from 'react';
// import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

import { FavouritesContextProvider } from '../pages/FavouritesPage/context/FavouritesContext';
import { CartContextProvider } from '../pages/CartPage/context/CartContext';
import { ThemeContextProvider } from '../context/ThemeContext';
import AuthPage from './AuthPage/AuthPage';

export function App() {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <FavouritesContextProvider>
          <div className="wrapper">
            <header className="header">
              <Header />
            </header>

            <main className="page">
              <AuthPage />
            </main>

            <Footer />
          </div>
        </FavouritesContextProvider>
      </CartContextProvider>
    </ThemeContextProvider>
  );
}
