import React, { useState } from "react";
import { Input, IconButton, Typography } from "@material-tailwind/react";

import TeamMembers from "../../components/modals/TeamMembers";
import Cricket_Batsman from "../../images/Cricket_Batsman.png";
import Shuttle_Player from "../../images/shuttle.png";
import Football_Player from "../../images/Football_Player.png";
import Basketball_Player from "../../images/Basketball_Player.png";
import moment from "moment";

export default function BookinPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedMember, setSelectedMember] = useState(0);


  const gameData = [
    { name: "Football", imgSrc: Football_Player, color: "bg-green-700" },
  ];
  const timeSlots = ["9am-10am", "10am-11am", "2pm-3pm"];

  // Create rows for time slots
  const timeSlotRows = [];
  for (let i = 0; i < timeSlots.length; i += 3) {
    timeSlotRows.push(timeSlots.slice(i, i + 3));
  }

  return (
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <TeamMembers selectedMember={selectedMember} setSelectedMember={setSelectedMember} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div class="flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div class="flex flex-col rounded-xl justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p class="text-xl md:text-3xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
              VV Turf
            </p>
            <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
              <div class="mt-4  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                <div class="w-full flex flex-col justify-start items-start space-y-8">
                  <h2 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                    <li class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={15}
                        viewBox="0 0 12 12"
                      >
                        <path
                          fill="#588157"
                          d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5m0 1A3.5 3.5 0 0 0 2.5 5c0 1.355 1.059 2.918 3.224 4.653L6 9.871l.276-.218C8.441 7.918 9.5 6.355 9.5 5A3.5 3.5 0 0 0 6 1.5M6 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                        ></path>
                      </svg>
                      <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Alandur
                      </p>
                    </li>
                  </h2>
                  <div className="flex lg:grid lg:grid-cols-12 mx-auto">
                    <div class="col-span-6 flex justify-start items-start flex-col space-y-2">
                      <div className="flex justify-between items-center mb-3 gap-3">
                        <label
                          for="counter-input"
                          class="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Team Members:
                        </label>
                        <h3 className="flex gap-1">
                          {selectedMember}
                          <button onClick={()=>setIsModalOpen(true)}>
                            <img
                              width={15}
                              height={15}
                              data-modal-target="default-modal"
                              data-modal-toggle="default-modal"
                              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1lZGl0IiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMSA0SDRhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTciLz48cGF0aCBkPSJNMTguNSAyLjVhMi4xMjEgMi4xMjEgMCAwIDEgMyAzTDEyIDE1bC00IDEgMS00IDkuNS05LjV6Ii8+PC9zdmc+"
                              alt=""
                            />
                          </button>
                        </h3>
                      </div>
                      <p class="text-md font-medium dark:text-white leading-none text-gray-800">
                        Game Preference
                      </p>
                      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                        {gameData.map((game) => (
                          <li
                            key={game.name}
                            className="flex flex-col items-center justify-center"
                          >
                            <label
                              htmlFor={game.name}
                              className={`flex flex-col items-center justify-center w-full px-2 py-2 text-xs rounded-lg cursor-pointer transition-transform transform hover:scale-105`}
                            >
                              <img
                                src={game.imgSrc}
                                alt={`${game.name} Player`}
                                className="w-20 h-20 object-contain mb-2"
                              />
                              <span className="text-xs font-medium">
                                {game.name}
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-6">
                      <p class="text-md font-medium dark:text-white leading-none text-gray-800">
                        Date
                        <span className="font-normal">
                          {" " + moment().format("ll")}
                        </span>
                      </p>
                      <p class="my-2 text-md font-medium dark:text-white leading-none text-gray-800">
                        Time Slots
                        <div className="space-y-2 mt-2">
                          {timeSlotRows.map((row, rowIndex) => (
                            <div
                              key={rowIndex}
                              className="flex flex-wrap justify-between space-x-2 md:space-x-4"
                            >
                              {row.map((slot) => (
                                <div
                                  key={slot}
                                  className={`p-2 m-1 flex-1 text-center rounded-lg cursor-pointer transition-colors duration-200 bg-primary/80 focusbg-primary/50 text-white`}
                                >
                                  <span className="text-xs md:text-sm font-medium">
                                    {slot}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </p>
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select court
                      </label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a court</option>
                        <option value="Court 1">Court A</option>
                        <option value="Court 2">Court B</option>
                        <option value="Court 3">Court C</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-3 grid grid-cols-12 gap-x-2">
        <div className="col-span-6">
          <div class="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3>Terms & Conditions</h3>
            <p>
              Welcome to Material Tailwind (the 'Product'), a components library
              that uses Tailwind CSS and React to help developers build unique
              web projects faster and easier. By accessing or using Material
              Tailwind(www.material-tailwind.com), you agree to be bound by
              these terms and conditions. If you do not agree with these terms
              and conditions, you must not use our products.
            </p>
          </div>
        </div>
        <div class=" grow col-span-6">
          <div class="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <div class="space-y-2">
              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Court Price
                </dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">
                  ₹{4000}
                </dd>
              </dl>

              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Convenience Fee
                </dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">
                  ₹{100}
                </dd>
              </dl>
              <dl class="flex items-center justify-between gap-4">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Tax
                </dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">
                  ₹{799}
                </dd>
              </dl>
            </div>

            <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt class="text-base font-bold text-gray-900 dark:text-white">
                Total
              </dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">
                ₹{4899.0}
              </dd>
            </dl>
            <div class="space-y-3 flex justify-center items-center">
              <button
                type="submit"
                class="flex w-1/3 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/95 focus:outline-none focus:ring-4  focus:ring-primary/30 dark:bg-primary/60 dark:hover:bg-primary/70 dark:focus:ring-primary/80"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
