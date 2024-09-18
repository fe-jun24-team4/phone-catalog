import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CheckoutModal } from '../pages/CartPage/components/CheckoutModal/CheckoutModal';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="page">
        <CheckoutModal />
      </main>

      <Footer />
    </div>
  );
}

export default App;
