import React from 'react';
import styles from './Nav.module.css';
import logo from '../../assets/nav-imgs/logo.png'

const Nav = (props) => {
  const navLinks = [
    'Home',
    'About',
    'Stats',
    'Contact',
  ];
  return (
    <nav>
      <img src={logo} alt="gibson plumbing" id={styles['nav-logo']}/>
      <ul>
        {navLinks.map((item,key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
