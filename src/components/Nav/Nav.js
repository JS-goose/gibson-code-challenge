import React from 'react';
import styles from './Nav.module.css';

const Nav = (props) => {
  const navLinks = [
    <a href="#">Home</a>,
    <a href="#">About</a>,
    <a href="#">Stats</a>,
    <a href="#">Contact</a>,
  ];
  return (
    <nav>
      <ul>
        {navLinks.map((item,key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
