import { useState, useEffect } from "react";

import "../scss/App.scss";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";

import { fetchCharacters } from "../services/fetch";
import ls from "../services/localStorage";
import { Route, Routes } from "react-router-dom";

function App() {
  // 1. Variables de estado

  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterCharacter, setFilterCharacter] = useState("");

  // 2. useEffect

  useEffect(() => {
    // Cuando carga la página

    if (!ls.includes("characters")) {
      fetchCharacters().then((data) => {
        setCharacters(data);
        ls.set("characters", data);
      });
    }
  }, []);

  // 3. funciones de eventos

  const handleFilterCharacter = (filterValue) => {
    setFilterCharacter(filterValue);
    console.log(filterValue);
  };

  // Filtrar personajes según el filtro de búsqueda
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filterCharacter.toLowerCase())
  );

  // 4. variables para el html

  const findCharacter = (id) => {
    return characters.find((character) => character.id === id);
  };

  // 5. El html en el return
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__tittle">Harry Potter</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters handleFilterCharacter={handleFilterCharacter} />
                <CharacterList characters={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:id"
            element={<CharacterDetail findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
