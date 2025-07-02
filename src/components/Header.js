import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
