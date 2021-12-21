import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-intro center">
      <h1 className="bolder title-large">AARUSH SHARMA</h1>
      <h3>
        I am a full stack web developer, keen on building user friendly
        applications.
      </h3>

      <Link to="/about">
        <button className="transparent-button">KNOW MORE ABOUT ME</button>
      </Link>
    </div>
  );
};

export default Home;
