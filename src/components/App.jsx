import { useState, useEffect } from "react";

import "../scss/App.scss";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  // 1. Variables de estado

  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  // 2. useEffect

  // useEffect para cargar personajes atendiendo a filterHouse
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${filterHouse}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, [filterHouse]);

  // 3. funciones de eventos

  const handleFilterCharacter = (filterValue) => {
    setFilterCharacter(filterValue);
  };

  const handleFilterHouse = (value) => {
    setFilterHouse(value);
  };

  // 4. variables para el html
  const filteredCharactersHouse = characters.filter(
    (character) => character.house === filterHouse
  );

  const filteredCharacters = filteredCharactersHouse.filter((character) =>
    character.name.toLowerCase().includes(filterCharacter.toLowerCase())
  );
  const findCharacter = (id) => {
    return characters.find((character) => character.id === id);
  };

  // 5. El html en el return
  return (
    <div className="page">
      <header className="hero">
        <section className="hero__content">
          <h1 className="content__title">Harry Potter</h1>
          <p className="content__slogan">Discover the characters</p>
          <div className="content__button">
            <a className="button__a" href="#">
              ¡Alohomora!
            </a>
          </div>
        </section>
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterCharacter={handleFilterCharacter}
                  handleFilterHouse={handleFilterHouse}
                  selectedHouse={filterHouse} // Pasar el estado de la casa seleccionada
                  filterCharacter={filterCharacter}
                />
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
