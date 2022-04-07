import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./Button";
import "./HeroSection.css";
//import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

function HeroSection() {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
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
              loop={0}
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
          onClick={openModal}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
          {modal ? (
            <section className="modal__bg">
              <div className="modal__align">
                <div className="modal__content" modal={modal}>
                  <IoCloseOutline
                    className="modal__close"
                    arial-label="Close modal"
                    onClick={setModal}
                  />
                  <div className="modal__video-align">
                    {videoLoading ? (
                      <div className="modal__spinner">
                        <BiLoaderAlt
                          className="modal__spinner-style"
                          fadeIn="none"
                        />
                      </div>
                    ) : null}
                    <iframe
                      className="modal__video-style"
                      onLoad={spinner}
                      loading="lazy"
                      width="800"
                      height="500"
                      src="https://res.cloudinary.com/wprodigy/video/upload/q_38/v1649340354/Assets/VID-20220121-WA0007_dlqsgg.mp4"
                      title="video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
