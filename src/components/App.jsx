import { useState, useEffect } from "react";

import "../scss/App.scss";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/filters";

import { fetchCharacters } from "../services/fetch";

function App() {
  // 1. Variables de estado

  const [characters, setCharacters] = useState([]);

  // 2. useEffect

  useEffect(() => {
    // Cuando carga la página

    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  // 3. funciones de eventos
  // 4. variables para el html
  // 5. El html en el return
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__tittle">Harry Potter</h1>
      </header>
      <main>
        <Filters />
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}

export default App;
