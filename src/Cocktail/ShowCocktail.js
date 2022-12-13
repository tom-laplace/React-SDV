const ShowCocktail = (props) => {
  const cocktailData = props.cocktail.drinks[0];

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktailData[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };

  return (
    <div className="mt-4">
      <h2 className="font-bold">{cocktailData.strDrink}</h2>
      <img
        src={cocktailData.strDrinkThumb}
        alt="Un cocktail"
        className="mx-auto w-64 border-2 border-white rounded-full"
      />
      <h3 className="font-bold">Instructions</h3>
      <p>{cocktailData.strInstructions}</p>
      <h3 className="font-bold">Ingrédients</h3>
      <ul>
        {getIngredients().map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowCocktail;
