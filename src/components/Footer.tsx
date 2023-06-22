import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img
        src="/assets/images/dunkirk-logo.jpg"
        alt="dunkirk logo"
        className={classes.dunkirkLogo}
      />
      <div className={classes.call}>
        <img src="/assets/icons/icon-phone.svg" alt="phone icon" />
        <span>(647)-403-4203</span>
      </div>
      <div className={classes.connect}>
        <a href="mailto:b6_10_94_furlonge@hotmail.com" className={classes.mail}>
          <img src="/assets/icons/icon-mail.svg" alt="mail icon" />
        </a>
        <a
          href="https://www.instagram.com/dunkirk_plumbing/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.instagram}
        >
          <img src="/assets/icons/icon-instagram.svg" alt="instagram icon" />
        </a>
      </div>
      <div>
        <nav className={classes.links}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Services</Link>
            </li>
          </ul>
          <ul>
            {" "}
            <li>
              <Link to="/about">Gallery</Link>
            </li>
            <li>
              <Link to="/about">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
