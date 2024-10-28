import React from "react";
import football from "../images/football.svg";
import FootballPlayer from "../images/Football_Player.svg";
// import Cricket_Batsman from "../images/Cricket_Batsman.svg";

export default function Carousel() {
  return (
    <div className="lg:max-h-screen lg:max-w-screen flex flex-row">
      <div className="lg:absolute -translate-x-56 translate-y-16 w-4/12">
        <img src={football} alt="" className="size-full opacity-30 scale-150" />
      </div>
      <div className="lg:flex items-center justify-center w-1/2 h-[36rem] content-center align-middle px-12">
        <div className="relative flex-col justify-center items-center">
          <h2 className="lg:text-3xl font-Mulish">Unleash Your Game</h2>
          <h1 className="lg:text-5xl font-bold font-Mulish">
            Book the Best Turf in Town!
          </h1>
          <p className="lg:pt-5 text-xl font-extralight">
            &quot;Book your favorite sports venues effortlessly. Find, reserve, and
            play at your nearby turfs with just a few taps.&quot;
          </p>
          <div className="lg:p-6">
            <button className="bg-primary hover:bg-primary text-white text-sm py-2 px-4 rounded-3xl">
              Let's Game On
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative bg-gradient-to-b rounded-full from-[#41980A]/60 to-[#E3F4F1]/60">
          <div className="flex justify-center ">
            <img src={FootballPlayer} alt="" className="size-full scale-125" />
          </div>
        </div>
        {/* <div className="relative bg-gradient-to-b rounded-full from-[#46A5FF]/60 to-[#E3F4F1]/60">
          <div className="flex justify-center items-center">
            <img src={Cricket_Batsman} alt="" className="size-full scale-125" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
