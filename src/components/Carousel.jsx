import React from "react";
import football from "../images/football.svg";
import FootballPlayer from "../images/Football_Player.svg";

export default function Carousel() {
  return (
    <div className="max-h-screen max-w-screen flex flex-row">
      <div className="absolute -translate-x-48 translate-y-20 w-4/12">
        <img src={football} alt="" className="size-full opacity-30 scale-150" />
      </div>
      <div className="flex items-center justify-center w-1/2 h-[36rem] content-center align-middle px-12">
        <div className="relative flex-col justify-center items-center">
          <h2 className="text-3xl font-Mulish">Unleash Your Game</h2>
          <h1 className="text-5xl font-bold font-Mulish">
            Book the Best Turf in Town!
          </h1>
          <p className="pt-5 text-xl font-extralight">
            "Book your favorite sports venues effortlessly. Find, reserve, and
            play at your nearby turfs with just a few taps."
          </p>
          <div className="p-6">
            <button className="bg-primary hover:bg-primary text-white text-sm py-2 px-4 rounded-3xl">
              Let's Game On
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-b rounded-full from-[#41980A]/60 to-[#E3F4F1]/60">
        <div className="flex justify-center items-center">
          <img src={FootballPlayer} alt="" className="size-full scale-125" />
        </div>
      </div>
    </div>
  );
}
