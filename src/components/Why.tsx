import classes from "./Why.module.css";

const Why = () => {
  return (
    <section className={classes.container}>
      <div>
        <div className={classes.title}>
          <h2>How We Can Help</h2>
        </div>
        <div className={classes.benefits}>
          <div className={classes.benefit}>
            <img src="/assets/icons/icon-person.svg" alt="person icon" />
            <div>
              <h3>Experienced Individuals</h3>
              <p>
                Our team is composed of highly experienced professionals who are
                passionate about what they do.
              </p>
            </div>
          </div>
          <div className={classes.benefit}>
            <img src="/assets/icons/icon-chart.svg" alt="chart icon" />
            <div>
              <h3>Refined Performance</h3>
              <p>
                Our processes have been refined over many years of
                implementation meaning our team always delivers.
              </p>
            </div>
          </div>
          <div className={classes.benefit}>
            <img src="/assets/icons/icon-cog.svg" alt="cog icon" />
            <div>
              <h3>Exceptional Service</h3>
              <p>
                We always provide quality craftsmanship, affordable pricing, and
                excellent customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
