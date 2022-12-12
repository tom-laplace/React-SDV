// créer un composant random cocktail
// qui affiche un cocktail random au click sur un bouton
// Pour ça, créez une variable d'état coktailRandomData avec useState
// creéz un bouton avec un event listener onClick
// au click, faites l'appel fetch à l'API : https://www.thecocktaildb.com/api/json/v1/1/random.php
// et utilisez la fonction retournée par useState pour modifier la valeur de la variable d'état
// et demandez à react de re-rendre le composant

import React from "react";
import { useState } from "react";

const RandomCocktail = () => {
  const [cocktailRandomData, setCocktailRandomData] = useState(null);

  const handleClick = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setCocktailRandomData(data);
      });
  };

  return (
    <div className=' text-center'>
      <button onClick={handleClick} className="border-white border-2 p-2">CockTell me</button>

      {cocktailRandomData !== null ? (
        <div className="mt-4">
          <h2>{cocktailRandomData.drinks[0].strDrink}</h2>
          <img src={cocktailRandomData.drinks[0].strDrinkThumb} alt="Un cocktail" className="mx-auto w-60 border-2 border-white rounded-full" />
        </div>
      ) : (
        <div>
          <h2>Cliquez sur le bouton pour découvrir un super cocktail !</h2>
        </div>
      )}
    </div>
  );
};

export default RandomCocktail;
