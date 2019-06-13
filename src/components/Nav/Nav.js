import React from 'react';
import styles from './Nav.module.css';
import logo from '../../assets/nav-imgs/logo.png'

const Nav = (props) => {
  const navLinks = [
    <a href="#">Home</a>,
    <a href="#">About</a>,
    <a href="#">Stats</a>,
    <a href="#">Contact</a>,
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
