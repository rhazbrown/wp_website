import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./Button";
import "./HeroSection.css";
//import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function HeroSection() {
  return (
    <div className="hero-container" id="home">
      <video
        src="https://res.cloudinary.com/wprodigy/video/upload/q_50/v1649089295/Assets/trailer_rizhod.mp4"
        autoPlay
        loop
        muted
      />
      <div className="Headings">
        <h1>WP!</h1>
        <h2>
          {" "}
          ONE STOP FOR{" "}
          <span style={{ fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Study Abroad!",
                "Graphic Design!",
                "Website Development!",
                "All Types Of Writting!",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link
          activeClass="active"
          to="services"
          className="btn-mobile"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </Link>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
