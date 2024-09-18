import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="page">
        <div className="page___container">
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
