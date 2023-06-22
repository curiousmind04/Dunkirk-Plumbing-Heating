import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sink}>
        <img src="/assets/images/sink.jpg" alt="sink image" />
        <span className={classes.introPhone}>Contact Us: (647)-403-4203</span>
        <h1>Dunkirk Plumbing & Heating</h1>
        <div className={classes.connect}>
          <a href="tel:6474034203" className={classes.call}>
            <img src="/assets/icons/icon-phone.svg" alt="phone icon" />
            <span>Call Us Now</span>
          </a>
          <a
            href="mailto:b6_10_94_furlonge@hotmail.com"
            className={classes.mail}
          >
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
        <span className={classes.introInfo}>
          Serving the community for over 10 years
        </span>
      </div>
      <div className={classes.intro}>
        <img src="/assets/icons/icon-quotes.svg" alt="quotes icon" />
        <p>
          “At Dunkirk Plumbing and Heating, we are equipped with years of
          expertise serving communities and businesses in and around the Greater
          Toronto Area. We make it our job to commit to a higher standard of
          professional service so that we can leave our customers completely
          satisfied in all aspects. With our help, you can rest assured during
          the entire process that you are in good hands!”
        </p>
        <span className={classes.name}>Alex Pethick</span>
        <span className={classes.position}>
          - Founder of Dunkirk Plumbing and Heating
        </span>
      </div>
      <div className={classes.assessment}>
        <div className={classes.assessmentIcons}>
          <img src="/assets/icons/icon-tools.svg" alt="tools icon" />
          <img src="/assets/icons/icon-bulb.svg" alt="bulb icon" />
        </div>
        <div className={classes.title}>
          <h2>Need an Assessment?</h2>
        </div>
        <div className={classes.stepOne}>
          <h3>Step 1:</h3>
          <ul>
            <li>
              <img
                src="/assets/icons/icon-check.svg"
                alt="checkmark icon"
                className={classes.checkmark}
              />
              <p>
                Determine whether it is an <b>emergency</b> or if you require a
                planned service
              </p>
            </li>
            <li>
              <img
                src="/assets/icons/icon-check.svg"
                alt="checkmark icon"
                className={classes.checkmark}
              />
              <p>Contact us by phone, email, or the contact form</p>
            </li>
            <li>
              <img
                src="/assets/icons/icon-check.svg"
                alt="checkmark icon"
                className={classes.checkmark}
              />
              <p>
                Let us provide a <b>no obligation</b> assessment of your
                situation and needs
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.stepTwo}>
          <h3>Step 2:</h3>
          <ul>
            <li>
              <img
                src="/assets/icons/icon-check.svg"
                alt="checkmark icon"
                className={classes.checkmark}
              />
              <p>
                Recommended course of action, steps that will be taken to remedy
                the issue, and what options may be needed for a solution
              </p>
            </li>
            <li>
              <img
                src="/assets/icons/icon-check.svg"
                alt="checkmark icon"
                className={classes.checkmark}
              />
              <p>
                Arrival of a highly skilled and friendly team that is committed
                to delivering exceptional service
              </p>
            </li>
            <li>
              <img
                src="/assets/icons/icon-check.svg"
                alt="checkmark icon"
                className={classes.checkmark}
              />
              <p>
                Overview of the completed job to ensure customer satisfaction
                with the finished state
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
