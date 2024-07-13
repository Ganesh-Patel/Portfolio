import React, { useState, useEffect } from 'react';
import './Header.css';
import Nav from './Nav/Nav.jsx';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 9 * window.innerHeight / 100; // Adjust as needed
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? 'header scrolled' : 'header'}>
      <Nav />
    </div>
  );
}

export default Header;
