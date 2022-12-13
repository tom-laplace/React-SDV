import React, { useState } from "react";

const SearchCocktail = ({ setCocktailsData }) => {
  const handleChange = (event) => {
    event.preventDefault();
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.drinks === null ? setCocktailsData([]) : setCocktailsData(data.drinks);
      });
  };

  return (
    <div className="flex justify-center">
      <form className="mx-auto flex-col flex">
        <input
          type="text"
          placeholder="Search a cocktail"
          className="border-2 border-black rounded-md p-2 m-2"
          name="search"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchCocktail;
