import React, { useState } from "react";
import spoturf from "../images/spoturf.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [logged, setLogged] = useState(false);
  return (
    <nav className="">
      <div className="max-w-screen flex md:flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={spoturf} className="h-20" alt="Spoturf" />
        </Link>
        {!logged ? (
          <div className="flex items-center md:order-2 space-x-5 md:space-x-8 rtl:space-x-reverse pr-5">
            <button
              type="button"
              className="lg:block hidden text-primary px-3 py-3 underline font-mono"
            >
              Contact Us
            </button>
            <Link
            to={"preference"}
              className="text-white bg-primary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-2 lg:px-5 py-2 lg:py-3 me-2 mb-2 dark:bg-primary dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Book your Turf
            </Link>
          </div>
        ) : (
          <div className="flex justify-between items-center flex-row">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          <div className="dropdown dropdown-end px-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-52 p-2 shadow"
            >
              <li>
                <button>Profile</button>
              </li>
              <li>
                <button>Booking History</button>
              </li>
              <li className="text-red-500">
                <button>Logout</button>
              </li>
            </ul>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;