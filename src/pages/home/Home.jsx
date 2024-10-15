import React from "react";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <>
      <div className="max-w-full relative">
        <NavBar />
        <Carousel />
      </div>
    </>
  );
}
