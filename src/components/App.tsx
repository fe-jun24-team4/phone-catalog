import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { TotalCost } from './CalculateCost';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="page">
        <Outlet />
      </main>
      <TotalCost products={[]} />

      <Footer />
    </div>
  );
}

export default App;
