import React from "react";

function Hero({ HeroName }) {
  if (HeroName === "Joker") {
    throw new Error("Not a hero");
  }
  return <h2>{HeroName}</h2>;
}

export default Hero;
