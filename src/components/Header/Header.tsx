import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./src/images/nice-gadgets-logo.png" alt="" />
      </div>
      <nav className="nav-links">
        <a href="#home">
          <span>Home</span>
        </a>
        <a href="#phones">
          <span>Phones</span>
        </a>
        <a href="#tablets">
          <span>Tablets</span>
        </a>
        <a href="#accessories">
          <span>Accessories</span>
        </a>
      </nav>
      <div className="burger-menu icon-home" />
      <div className="icon-group">
        <div className="icon-heart icon" />
        <div className="icon-shopping-bag icon" />
      </div>
    </header>
  );
};
