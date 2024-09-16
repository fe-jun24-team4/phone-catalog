import React from 'react';
import { Header } from './Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="page">
        <div className="page___container" style={{ width: 350 }}>
          <Outlet />
        </div>
      </main>

      <div className="div__container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
