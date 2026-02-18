import React from "react";
import Video from "./Video";

function HomeHeroText() {
  return (
    <div className="font-[font1] pt-5 text-center text-white">
      <div className="text-[10vw] uppercase leading-[8.5vw] flex justify-center items-center">L'étincelle</div>
      <div className="text-[10vw] uppercase leading-[8.5vw] flex justify-center items-center">qui<div className="h-[7vw] w-[15vw] rounded-full overflow-hidden -mt-5"><Video /></div>génère</div>
      <div className="text-[10vw] uppercase leading-[8.5vw] flex justify-center items-center">la créativité</div>
    </div>
  );
}

export default HomeHeroText;
