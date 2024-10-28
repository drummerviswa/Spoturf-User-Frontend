import React, { useState } from "react";
import Cricket_Batsman from "../images/Cricket_Batsman.png";
import Shuttle_Player from "../images/shuttle.png";
import Football_Player from "../images/Football_Player.png";
import Basketball_Player from "../images/Basketball_Player.png";
import { useNavigate } from "react-router-dom";

function Preference() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
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
    <div className="w-screen h-screen bg-blackBg">
      <div className="flex mx-32 py-28 flex-col">
        <h1 className="text-primary text-2xl font-semibold mt-9">
          Choose your Game Preference
        </h1>
        <div className="flex flex-wrap my-4 text-white mt-20">
          {gameData.map((game) => (
            <button
              key={game.name}
              onClick={() => handlePreference(game.name)}
              className={`flex card mx-8 w-64 shadow-md border border-primary p-5 ${
                games.includes(game.name) ? `${game.color}` : ""
              }`}
              aria-label={`Select ${game.name}`}
            >
              <div className="flex w-full">
                <h2 className="text-lg font-medium ps-40 text-center">
                  {game.name}
                </h2>
              </div>
              <figure className="flex justify-center items-center">
                <img
                  src={game.imgSrc}
                  alt={`${game.name} Player`}
                  className="w-40 h-40"
                />
              </figure>
            </button>
          ))}
        </div>
        {games.length>0?(
          <div className="flex items-center justify-center pt-8">
          <button onClick={()=>navigate("/listing")} className="px-12 py-4 rounded-full bg-primary font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-darkTheme transition-colors duration-200">
            Choose
          </button>
        </div>
        ):<></>}
      </div>
    </div>
  );
}

export default Preference;
