import React from "react";
import Tech from "../../components/logos";
import Button from "../../components/button";
// import Typed from "react-typed";

const techTools = ["iOS", "Android", "React", "Vue", "Web", "Angular"];

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <h1 className="banner-title">
          Learn to <br /> design and code
        </h1>
        <h1 className="tech-animated">
          {/* <Typed
            strings={techTools}
            typeSpeed={300}
            backSpeed={100}
            backDelay={1500}
            loop
          />{" "} */}
          apps
        </h1>
        <p className="banner-caption">
          The ONLY BLUEPRINT you’ll ever need to start building real word
          Websites and Mobile apps. Learn how to design and build React, React
          Native, Vue, and Angular Apps
        </p>
        <div>
          <Tech />
        </div>

        <div className="button-holder">
          <Button title="Get Started" link="/get-started" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
