const Header = () => {
  return (
    <header className="mb-7 p-1 border-b-2 border-white flex flex-col">
      <h1 className="mx-auto text-3xl  font-bold">Sup de Cocktail</h1>
      <nav className="mx-auto">
          <ul className="flex flex-row">
            <li>
              <a className="p-2" href={`/cocktails`}>Cocktails à volonté</a>
            </li>
            <li>
              <a className="p-2" href={`/random`}>Cocktail aléatoire</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
