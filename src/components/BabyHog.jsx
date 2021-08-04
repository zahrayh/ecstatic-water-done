import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

const eyesImages = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby
};

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
  const [weight, setWeight] = useState(0);

  function handleChangeWeight(e) {
    const operation = e.target.name;
    if (operation === "+") {
      setWeight((prevWeight) => prevWeight + 1);
    } else if (operation === "-") {
      setWeight((prevWeight) => {
        if (prevWeight > 0) {
          return prevWeight - 1;
        } else {
          return 0;
        }
      });
    }
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  }

  return (
    <li className="hogbabies">
      <h1>{props.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>
        Increase Weight
      </button>
      <button name="-" onClick={handleChangeWeight}>
        Decrease Weight
      </button>

      <div className="hb-wrap">
        <img
          src={eyesImages[props.eyeColor]}
          style={{ height: `${200 + 5 * weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
