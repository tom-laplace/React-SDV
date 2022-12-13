import React, { useState } from "react";

const SearchCocktail = ({setCocktailsData}) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setCocktailsData(data.drinks);
      });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="mx-auto flex-col flex">
        <input
          type="text"
          placeholder="Search a cocktail"
          className="border-2 border-black rounded-md p-2 m-2"
          value={search}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="border-2 border-black rounded-md p-2 m-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchCocktail;