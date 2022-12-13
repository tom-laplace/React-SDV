const ShowListCocktail = ({ cocktails }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-5">
        {cocktails.map((cocktail) => (
          <div className="border-2 border-white rounded-lg p-4">
            <h2 className="font-bold">{cocktail.strDrink}</h2>
            <img
              src={cocktail.strDrinkThumb}
              alt="Un cocktail"
              className="mx-auto w-64 border-2 border-white rounded-full"
            />
            <h3 className="font-bold">Ingrédients</h3>
            <ul>
              <li>{cocktail.strIngredient1}</li>
              <li>{cocktail.strIngredient2}</li>
              <li>{cocktail.strIngredient3}</li>
              <li>{cocktail.strIngredient4}</li>
              <li>{cocktail.strIngredient5}</li>
              <li>{cocktail.strIngredient6}</li>
              <li>{cocktail.strIngredient7}</li>
              <li>{cocktail.strIngredient8}</li>
              <li>{cocktail.strIngredient9}</li>
              <li>{cocktail.strIngredient10}</li>
              <li>{cocktail.strIngredient11}</li>
              <li>{cocktail.strIngredient12}</li>
              <li>{cocktail.strIngredient13}</li>
              <li>{cocktail.strIngredient14}</li>
              <li>{cocktail.strIngredient15}</li>
            </ul>
            <h3 className="font-bold">Instructions</h3>
            <p>{cocktail.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowListCocktail;