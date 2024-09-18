import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { PageRoute } from './CartPageRoute/CartPageRoute';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="page">
        <Outlet />
        <PageRoute />
      </main>

      <Footer />
    </div>
  );
}

export default App;
