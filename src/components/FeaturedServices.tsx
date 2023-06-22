import { Link } from "react-router-dom";

import classes from "./FeaturedServices.module.css";

const FeaturedServices = () => {
  return (
    <section className={classes.container}>
      <img src="/assets/images/services-image.jpg" alt="services image" />
      <h2>Some of our Services</h2>
      <div className={classes.lists}>
        <ul className={classes.list}>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Plumbing Maintenance
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Toilets
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Faucets
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Bath and Shower
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Water Heaters
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Repairs
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Assessments
          </li>
        </ul>
        <ul className={classes.list}>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Installations
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Backwater Valves
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Leaking Pipes
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Frozen Pipes
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Underground Plumbing
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Residential Services
          </li>
          <li>
            <img
              src="/assets/icons/icon-check.svg"
              alt="checkmark icon"
              className={classes.checkmark}
            />
            Business Services
          </li>
        </ul>
      </div>
      <Link to="/services">More Details</Link>
    </section>
  );
};

export default FeaturedServices;
