import FeaturedServices from "../components/FeaturedServices";
import Intro from "../components/Intro";
import Location from "../components/Location";
import Why from "../components/Why";
// import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Intro />
      <FeaturedServices />
      <Why />
      <Location />
    </>
  );
};

export default Home;
