import React from 'react';
import './Footer.css'; // Переконайтесь, що стиль для футера правильний

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="./public/LogoNiceGadget.png" alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-section">
          
          <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="footer-link">
          <h3>GITHUB</h3>
          </a>
        </div>
        <div className="footer-section">
          <h3>CONTACTS</h3>
          
        </div>
        <div className="footer-section">
        <h3>RIGHTS</h3>
        </div>
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img src="./public/Slider button - Default (right).png" alt="Back to top" className="scroll-to-top-img" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;