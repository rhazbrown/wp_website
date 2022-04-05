import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>SERVICES</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/education.jpg"
              text="Our agency pairs you with the best affordable schools in Europe and Canada. Germany, Norway, South and North Cyprus 50-100%"
              label="Study Abroad"
              path="/study-abroad"
            />
            <CardItem
              src="images/graphic.png"
              text="Providing High-quality Custom Graphic Designs For an Extremely Affordable Price. Try it! Extremely Affordable, Fast Delivery (1-3 days), Customized for You. 14D Money-back Guarantee."
              label="Graphic Designs"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/web.png"
              text="Trust our team with over 4 years experience. Developers, Designers, UX Experts and Marketers. Fast Delivery, Eco Packages from $800, Premium Photos, affordable Hosting and Support."
              label="Web development"
              path="/study-abroad"
            />
            <CardItem
              src="images/writting.png"
              text="Providing you with all types of high-quality writting from, thesis writting, movie scripts etc. Tailored to meet your need."
              label="All types of writting"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
