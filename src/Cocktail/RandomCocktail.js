import React, { useState, useEffect } from "react";

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

      {cocktailRandomData !== null ? (
        <div className="mt-4">
          <h2>{cocktailRandomData.drinks[0].strDrink}</h2>
          <img
            src={cocktailRandomData.drinks[0].strDrinkThumb}
            alt="Un cocktail"
            className="mx-auto w-60 border-2 border-white rounded-full"
          />
        </div>
      ) : (
        <div>
          <h2>Ca charge</h2>
        </div>
      )}
    </div>
  );
};

export default RandomCocktail;
