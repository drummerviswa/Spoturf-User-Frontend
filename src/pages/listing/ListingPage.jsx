import React from "react";
import SearchBar from "../../components/SearchBar";
import LocationComponent from "../../components/LocationComponent";
import Filter from "../../components/Filter";
import Turfcard from "../../components/Turfcard";
import Booking from "../../components/Booking";
import Discount from "../../components/Discount";

function ListingPage() {
  return (
    <div>
      {/* <Discount /> */}
      <section className="relative">
        <div className="w-full max-w-8xl mx-auto px-4">
          <div className="flex gap-8 items-center flex-row py-4">
            <LocationComponent />
            <SearchBar />
            <div className="hidden lg:block bg-ternary w-full p-8 rounded-xl"></div>
          </div>
          <Booking />
          <div className="grid grid-cols-12">
            <Filter />
            <div className="p-6 col-span-12 md:col-span-10">
              <section className="flex justify-center items-center bg-gray-50 rounded-xl w-full py-8 antialiased dark:bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl 2xl:px-0">
                  <div className="mb-4 px-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                    <Turfcard
                      img={
                        "https://turftown.in/_next/image?url=https%3A%2F%2Fturftown.s3.ap-south-1.amazonaws.com%2Fsuper_admin%2Ftt-1724315703275.webp&w=640&q=75"
                      }
                      title={"VV Turfs 137"}
                      location={"Santhome"}
                      price={300}
                    />
                  </div>
                  <div className="w-full text-center">
                    <button
                      type="button"
                      className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                      Show more
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingPage;
