import React, { useState, useEffect } from "react";
import ShowCocktail from "./ShowCocktail";

const RandomCocktail = () => {
  const [cocktailRandomData, setCocktailRandomData] = useState(null);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setCocktailRandomData(data);
      });
  }, []); //Tableau vide pour qu'il s'éxécute qu'une seule fois

  const handleClick = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setCocktailRandomData(data);
      });
  };

  return (
    <div className=" text-center">
      <button onClick={handleClick} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        CockTell me
      </button>

      {cocktailRandomData && <ShowCocktail cocktail={cocktailRandomData} />}
    </div>
  );
};

export default RandomCocktail;
