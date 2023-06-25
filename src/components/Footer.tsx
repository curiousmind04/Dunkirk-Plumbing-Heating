import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img
        src="/assets/images/next-logo.png"
        alt="next logo"
        className={classes.companyLogo}
      />

      <div className={classes.middle}>
        <div className={classes.call}>
          <img src="/assets/icons/icon-phone.svg" alt="phone icon" />
          <span>(647)-321-4567</span>
        </div>
        <div className={classes.connect}>
          <a
            href="mailto:b6_10_94_furlonge@hotmail.com"
            className={classes.mail}
          >
            <img src="/assets/icons/icon-mail.svg" alt="mail icon" />
          </a>
          <a
            href="https://www.instagram.com/brandon.cbh/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.instagram}
          >
            <img src="/assets/icons/icon-instagram.svg" alt="instagram icon" />
          </a>
        </div>
      </div>

      <div>
        <nav className={classes.links}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
