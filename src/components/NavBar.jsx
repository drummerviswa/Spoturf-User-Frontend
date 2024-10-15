import React from "react";
import spoturf from "../images/spoturf.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="">
      <div className="w-screen flex md:flex-wrap items-center justify-between mx-auto">
        <Link className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={spoturf} className="h-20" alt="Spoturf" />
        </Link>
        <div className="flex items-center md:order-2 space-x-5 md:space-x-8 rtl:space-x-reverse pr-5">
          <button
            type="button"
            className="lg:block hidden text-primary px-3 py-3 underline font-mono"
          >
            Contact Us
          </button>
          <button
            type="button"
            className="text-white bg-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-2 lg:px-5 py-2 lg:py-3 me-2 mb-2 dark:bg-primary dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Book your Turf
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
