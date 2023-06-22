import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          <div>
            {/* <h1>Dunkirk Plumbing & Heating</h1> */}
            <img
              src="/assets/images/dunkirk-logo.jpg"
              alt="dunkirk logo"
              className={classes.dunkirkLogo}
            />
          </div>
          <nav>
            {menu && (
              <div className={classes.linksContainer}>
                <button className={classes.close} onClick={closeMenu}>
                  <img src="/assets/icons/icon-close.svg" alt="close icon" />
                </button>
                <ul className={classes.links}>
                  <li>
                    <Link to="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeMenu}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeMenu}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeMenu}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeMenu}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeMenu}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {!menu && (
              <button
                className={classes.hamburger}
                onClick={() => setMenu(true)}
              >
                <img
                  src="/assets/icons/icon-hamburger.svg"
                  alt="hamburger icon"
                />
              </button>
            )}
          </nav>
        </div>
      </header>
      {menu && <div className={classes.backdrop} onClick={closeMenu}></div>}
    </>
  );
};

export default Navigation;
