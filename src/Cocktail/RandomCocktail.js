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
      <button onClick={handleClick} className="border-white border-2 p-2">
        CockTell me
      </button>

      {cocktailRandomData && <ShowCocktail cocktail={cocktailRandomData} />}
    </div>
  );
};

export default RandomCocktail;
