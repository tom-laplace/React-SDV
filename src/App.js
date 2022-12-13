import Header from "./Header";
import "./index.css";
import RandomCocktail from "./RandomCocktail/RandomCocktail";
import ListCocktail from "./ListCocktail/ListCocktail";

function App() {
  return (
    <div>
      <Header />
      <ListCocktail />
    </div>
  );
}

export default App;
