import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./src/images/nice-gadgets-logo.png" alt="" />
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#phones">Phones</a>
        <a href="#tablets">Tablets</a>
        <a href="#accessories">Accessories</a>
      </nav>
      <div className="burger-menu icon-home" />
      <div className="icon-group">
        <div className="separator" />
        <div className="icon-heart" />
        <div className="separator" />
        <div className="icon-shopping-bag" />
      </div>
    </header>
  );
};
