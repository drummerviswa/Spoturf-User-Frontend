import React from "react";
import football from "../images/football.svg";
import FootballPlayer from "../images/Football_Player.svg";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div className=" no-scrollbar">
      <div className="lg:max-h-screen no-scrollbar lg:max-w-screen flex flex-col lg:flex-row">
        {/* Background Image */}
        <div className="relative  no-scrollbar lg:absolute -translate-x-0 translate-y-8 lg:-translate-x-56 lg:translate-y-16 w-full lg:w-4/12">
          <img
            src={football}
            alt="Football Background"
            className="size-full opacity-30 scale-150 object-cover w-full h-64 lg:h-auto"
          />
        </div>
        {/* Main Content */}
        <div className="flex items-center  no-scrollbar -mt-56 lg:-mt-0 justify-center w-full lg:w-1/2 h-[36rem] px-4 lg:px-12">
          <div className="relative flex-col justify-center items-center text-center">
            <h2 className="lg:text-3xl text-2xl font-Mulish">
              Unleash Your Game
            </h2>
            <h1 className="lg:text-5xl text-4xl font-bold font-Mulish">
              Book the Best Turf in Town!
            </h1>
            <p className="lg:pt-5 text-xl font-extralight">
              &quot;Book your favorite sports venues effortlessly. Find,
              reserve, and play at your nearby turfs with just a few taps.&quot;
            </p>
            <div className="p-4 lg:p-6">
              <Link
                to={"preference"}
                className="bg-primary hover:bg-primary text-white text-sm py-2 px-4 rounded-3xl"
              >
                Let's Game On
              </Link>
            </div>
          </div>
        </div>
        {/* Player Image */}
        <div className="flex  no-scrollbar justify-center items-center w-full lg:w-1/2">
          <div className="relative bg-gradient-to-b rounded-full from-[#41980A]/60 to-[#E3F4F1]/60">
            <div className="flex justify-center">
              <img
                src={FootballPlayer}
                alt="Football Player"
                className="size-full scale-125 w-40 h-40 lg:w-auto lg:h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100  no-scrollbar p-6 lg:p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100x100.png?text=Easy+Booking"
              alt="Easy Booking"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-semibold">Easy Booking</h3>
            <p className="text-center">
              Book your favorite turf in just a few clicks!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100x100.png?text=Variety+of+Sports"
              alt="Variety of Sports"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-semibold">Variety of Sports</h3>
            <p className="text-center">
              Choose from a wide range of sports venues.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100x100.png?text=Secure+Payment"
              alt="Secure Payment"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-semibold">Secure Payment</h3>
            <p className="text-center">
              Enjoy a hassle-free and secure payment process.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white no-scrollbar p-6 lg:p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="flex flex-col items-center">
          <blockquote className="text-lg italic text-gray-600 mb-4">
            &quot;This app made booking turfs so easy! Highly recommended!&quot;
          </blockquote>
          <cite className="text-md font-semibold">- User A</cite>
        </div>
        <div className="flex flex-col items-center mt-6">
          <blockquote className="text-lg italic text-gray-600 mb-4">
            &quot;A fantastic experience! The interface is user-friendly and
            straightforward.&quot;
          </blockquote>
          <cite className="text-md font-semibold">- User B</cite>
        </div>
      </div>
    </div>
  );
}
