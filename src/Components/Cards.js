import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Radiant Beauty: A Glimpse into Your Shine in 5 Frames ✨📸</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/t7.jpeg"
              text="Your radiant smile brightens even the dullest days. Every moment spent with you is filled with joy and warmth."
              label="Captivating Charm"
              path="/services"
            />
            <CardItem
              src="images/t3.jpeg"
              text="In every gesture, there's a graceful elegance that defines you. Your presence is a true reflection of beauty and sophistication"
              label="Elegance Personified"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/t8.jpg"
              text="Your presence lights up the room, casting a radiant aura that is simply irresistible. The world seems a better place with you in it"
              label="Glowing Radiance"
              path="/services"
            />
            <CardItem
              src="images/t9.jpg"
              text="Your eyes are like a captivating spell, drawing me in with their depth and mystery. Lost in the enchanting world they create"
              label="Mesmerizing Gaze"
              path="/products"
            />
            <CardItem
              src="images/t11.jpg"
              text="Your adorable charm is a beacon of joy. From your infectious laughter to the way you light up a room with your cuteness, you have a magical way of making every moment special."
              label="Irresistible Cuteness"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
