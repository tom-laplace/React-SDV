import React, { useEffect, useState } from "react";
import SearchCocktail from "./SearchCocktail";
import ShowListCocktail from "./ShowListCocktail";

const ListCocktail = () => {
  const [cocktailsData, setCocktailsData] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        setCocktailsData(data.drinks);
      });
  }, []); //Tableau vide pour qu'il s'éxécute qu'une seule fois

  return (
    <>
      <SearchCocktail setCocktailsData={setCocktailsData} />
      <ShowListCocktail cocktails={cocktailsData} />
    </>
  );
};

export default ListCocktail;
