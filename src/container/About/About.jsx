import { useEffect, useRef } from "react";
import { images } from "../../constants";
import { init } from "ityped";

import "./About.scss";

const About = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full-Stack Developer", "Always Learning"],
    });
  }, []);

  return (
    <>
      <div className="hero-card" id="About">
        <div className="hero-container">
          <div className="text-container">
            <h3 id="title">Hello, I'm Michael Duisenberg</h3>

            <h3>
              <span ref={textRef}></span>
            </h3>
            <div className="about">
              <p className="info">
                I am a full-time student currently enrolled in the
                Software Development program at Grand Canyon University. I have
                a passion for learning and problem solving and a desire to
                understand the way things work. Determined and analytical, I
                never give up once I set my mind to something.
              </p>
            </div>
            <div className="hero-card-text">
              <h3>
                Goal Driven technoligist with a passion for Software Development
              </h3>
              <div className="icons">
                <a href="https://github.com/MrDuise">
                  <img className="logo" src={images.github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/michael-duisenberg/">
                  <img className="logo" src={images.linkedin} alt="linkdien" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-card-image">
            <img src={images.profile} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
