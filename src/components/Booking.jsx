import moment from "moment";
import React, { useEffect, useRef, useState } from "react";

import Cricket_Batsman from "../images/Cricket_Batsman.png";
import Shuttle_Player from "../images/shuttle.png";
import Football_Player from "../images/Football_Player.png";
import Basketball_Player from "../images/Basketball_Player.png";

export default function Booking() {
  const [dates, setDates] = useState([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const dateContainerRef = useRef(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const dateArray = Array.from({ length: 10 }, (_, index) => ({
      date: moment().add(index, "days").format("MMM Do"),
      selected: index === 0,
    }));
    setDates(dateArray);
  }, []);

  const handleDateClick = (index) => {
    setDates((prevDates) =>
      prevDates.map((dateObj, i) => ({
        ...dateObj,
        selected: i === index,
      }))
    );
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlots((prevSlots) =>
      prevSlots.includes(timeSlot)
        ? prevSlots.filter((slot) => slot !== timeSlot)
        : [...prevSlots, timeSlot]
    );
  };

  const scrollLeft = () => {
    if (dateContainerRef.current) {
      dateContainerRef.current.scrollLeft -= 150;
    }
  };

  const scrollRight = () => {
    if (dateContainerRef.current) {
      dateContainerRef.current.scrollLeft += 150;
    }
  };

  const timeSlots = [
    "9am-10am",
    "10am-11am",
    "11am-12pm",
    "12pm-1pm",
    "1pm-2pm",
    "2pm-3pm",
  ];

  // Create rows for time slots
  const timeSlotRows = [];
  for (let i = 0; i < timeSlots.length; i += 3) {
    timeSlotRows.push(timeSlots.slice(i, i + 3));
  }

  const handlePreference = (game) => {
    setGames((prevGames) =>
      prevGames.includes(game)
        ? prevGames.filter((g) => g !== game)
        : [...prevGames, game]
    );
  };

  const gameData = [
    { name: "Cricket", imgSrc: Cricket_Batsman, color: "bg-blue-500" },
    { name: "Shuttle", imgSrc: Shuttle_Player, color: "bg-red-500" },
    { name: "Football", imgSrc: Football_Player, color: "bg-green-700" },
    { name: "Basketball", imgSrc: Basketball_Player, color: "bg-orange-500" },
  ];

  return (
    <div className="w-full bg-gray-100 flex flex-col p-4 md:p-6 rounded-lg shadow-lg space-y-6">
      <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
        Game Preference:
      </h3>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {gameData.map((game) => (
          <li key={game.name} className="flex flex-col items-center justify-center">
            <input
              type="checkbox"
              id={game.name}
              className="hidden peer"
              checked={games.includes(game.name)}
              onChange={() => handlePreference(game.name)}
            />
            <label
              htmlFor={game.name}
              className={`flex flex-col items-center justify-center w-full px-2 py-2 text-xs rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${games.includes(game.name) ? `${game.color} text-white` : 'bg-white text-gray-800'}`}
            >
              <img src={game.imgSrc} alt={`${game.name} Player`} className="w-20 h-20 object-contain mb-2" />
              <span className="text-xs font-medium">{game.name}</span>
            </label>
          </li>
        ))}
      </ul>
      <h1 className="text-lg md:text-xl font-semibold text-gray-700">Select a Date</h1>
      <div className="flex items-center space-x-2 md:space-x-4">
        <button
          onClick={scrollLeft}
          className="p-2 bg-gray-300 text-gray-600 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
        >
          ◀
        </button>
        <div
          ref={dateContainerRef}
          className="flex overflow-x-auto space-x-2 scrollbar-hide"
        >
          {dates.map((dateObj, index) => (
            <button
              key={index}
              onClick={() => handleDateClick(index)}
              className={`min-w-[60px] p-2 rounded-lg text-center transition-colors duration-200 ${dateObj.selected ? "bg-primary text-white" : "bg-gray-200 text-gray-700"} hover:bg-primary/50 focus:bg-primary/80 hover:text-white`}
            >
              <span className="text-sm md:text-base font-medium">{dateObj.date}</span>
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="p-2 bg-gray-300 text-gray-600 rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
        >
          ▶
        </button>
      </div>

      {/* Time Slot Selection Section */}
      <h1 className="text-lg md:text-xl font-semibold text-gray-700">Select a Time Slot</h1>
      <div className="space-y-2">
        {timeSlotRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-between space-x-2 md:space-x-4">
            {row.map((slot) => (
              <div
                key={slot}
                onClick={() => handleTimeSlotClick(slot)}
                className={`p-2 flex-1 text-center rounded-lg cursor-pointer transition-colors duration-200 ${selectedTimeSlots.includes(slot) ? "bg-primary text-white" : "bg-gray-200 text-gray-700"} hover:bg-primary/80 focus:bg-primary/50 hover:text-white`}
              >
                <span className="text-sm md:text-xs font-medium">{slot}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
