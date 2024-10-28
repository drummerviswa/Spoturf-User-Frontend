import React from "react";

export default function Filter() {
  return (
    <div class="col-span-12 md:col-span-2 w-full max-md:max-w-md max-md:mx-auto">
      <div class="mt-7 box rounded-xl border border-gray-300 bg-white p-4 w-full md:max-w-sm">
        <div class="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
          <p class="font-medium text-base leading-7 text-black ">
            Filter Plans
          </p>
          <p class="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
            RESET
          </p>
        </div>

        <div class="w-full mb-7">
          <p class="font-medium text-sm leading-6 text-black mb-3">
            Game Preference
          </p>
          <div class="box flex flex-col gap-2">
            <div class="flex items-center">
              <input
                id="checkbox-default-1"
                type="checkbox"
                value=""
                class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
              />
              <label
                for="checkbox-default-1"
                class="font-normal text-gray-600 leading-4 cursor-pointer"
              >
                Football
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="checkbox-default-1"
                type="checkbox"
                value=""
                class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
              />
              <label
                for="checkbox-default-1"
                class="font-normal text-gray-600 leading-4 cursor-pointer"
              >
                Cricket
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="checkbox-default-1"
                type="checkbox"
                value=""
                class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
              />
              <label
                for="checkbox-default-1"
                class="font-normal text-gray-600 leading-4 cursor-pointer"
              >
                Shuttle
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="checkbox-default-1"
                type="checkbox"
                value=""
                class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
              />
              <label
                for="checkbox-default-1"
                class="font-normal text-gray-600 leading-4 cursor-pointer"
              >
                Basketball
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mb-3">
          <label
            for="counter-input"
            class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Team Members
          </label>
          <div class="relative flex items-center">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
              placeholder=""
              defaultValue={1}
              min={1}
              max={15}
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="counter-input"
              class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <label
            for="counter-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ratings
          </label>
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="">
          <label
            for="counter-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <div class="relative mb-6">
            <label for="labels-range-input" class="sr-only">
              Labels range
            </label>
            <input
              id="labels-range-input"
              type="range"
              min={100}
              max={400}
              step={100}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
              ₹100
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              ₹200
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              ₹300
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
              ₹400
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
