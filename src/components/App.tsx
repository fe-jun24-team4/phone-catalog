import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Input } from './inputs';
import { shippingOptions } from '../utils/constants/dropdownOptions';
import { CheckoutModal } from '../pages/CartPage/components/CheckoutModal/CheckoutModal';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="page">
        <div className="page___container">
          {/* <Outlet /> */}
          <div style={{ paddingTop: '100px' }}>
            <CheckoutModal />
          </div>
        </div>
      </main>

      <div className="div__container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
