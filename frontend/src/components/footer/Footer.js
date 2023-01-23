import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footerDiv}>
      <Link to="https://github.com/kobir911/MERN-Project" className="nav-link">
        Go to My Github
      </Link>

      <h1>© 2022 Copyright By Kobi Rozin</h1>
    </div>
  );
};

export default Footer;
