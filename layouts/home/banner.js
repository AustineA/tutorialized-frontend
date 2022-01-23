import { useEffect, useRef } from "react";
import Tech from "../../components/logos";
import Button from "../../components/button";
import Typed from "typed.js";

const Banner = () => {
  const techTools = ["iOS", "Android", "React", "Vue", "Web", "Angular"];
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: techTools,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="banner">
      <div>
        <h1 className="banner-title">
          Learn to <br /> design and code
        </h1>
        <h1 className="tech-animated">
          <span ref={el}></span>
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
