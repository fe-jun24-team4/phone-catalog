import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import AboutSection from './AboutSection/AboutSection';


function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>

      <main className="page">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
