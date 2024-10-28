import React from "react";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import ListingPage from "../listing/ListingPage";
import Footer from "../../components/Footer";
import TurfDetails from "../listing/TurfDetails";
import BookinPage from "../booking/BookinPage";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="max-w-full flex flex-col">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
