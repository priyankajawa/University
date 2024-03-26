import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a href="#program" onClick={() => scrollToSection('program')}>Program</a></li>
        <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
        <li><a href="#campus" onClick={() => scrollToSection('campus')}>Campus</a></li>
        <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
        <li><a href="#contact" onClick={() => scrollToSection('contact')} className='btn'>Contact Us</a></li>
      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
