import classes from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sink}>
        <img src="/assets/images/sink.jpg" alt="sink image" />
        <span className={classes.introPhone}>Contact Us: (647)-321-4567</span>
        <h1>
          Next Plumbing
          <br /> & Heating
        </h1>
        <div className={classes.connect}>
          <a href="tel:6473214567" className={classes.call}>
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
            href="https://www.instagram.com/brandon.cbh/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.instagram}
          >
            <img src="/assets/icons/icon-instagram.svg" alt="instagram icon" />
          </a>
        </div>
        <span className={classes.introInfo}>
          *Serving the community for over 10 years
        </span>
      </div>
      <div className={classes.bottom}>
        <div className={classes.intro}>
          <div>
            <img src="/assets/icons/icon-quotes.svg" alt="quotes icon" />
            <p>
              “At Next Plumbing and Heating, we are equipped with years of
              expertise serving communities and businesses in and around the
              Greater Toronto Area. We make it our job to commit to a higher
              standard of professional service so that we can leave our
              customers completely satisfied in all aspects. With our help, you
              can rest assured during the entire process that you are in good
              hands!”
            </p>
            <span className={classes.name}>Duncan Truell</span>
            <span className={classes.position}>
              - Founder of Next Plumbing and Heating
            </span>
          </div>
        </div>

        <div className={classes.assessment}>
          <div>
            <div className={classes.assessmentIcons}>
              <img src="/assets/icons/icon-tools.svg" alt="tools icon" />
              <img src="/assets/icons/icon-bulb.svg" alt="bulb icon" />
            </div>
            <div className={classes.title}>
              <h2>Need an Assessment?</h2>
            </div>
            <div className={classes.steps}>
              <p>
                We are ready to help! Contact us by phone, email, or the contact
                form for a <b>no obligation</b> assessment of your situation and
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
