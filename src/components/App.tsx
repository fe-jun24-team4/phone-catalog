import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import Footer from '../Footer/Footer';

import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="page">
        <div className="page___container" style={{ width: 350 }}>
          <Outlet />
          Content
        </div>
      </main>

      <div className="div__container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
