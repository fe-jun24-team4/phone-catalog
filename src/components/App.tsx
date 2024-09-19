import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { CartPageRoute } from './CartPageRoute';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="page">
        <Outlet />
        <CartPageRoute />
      </main>

      <Footer />
    </div>
  );
}

export default App;
