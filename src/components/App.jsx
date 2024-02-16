import { useState, useEffect } from "react";

import "../scss/App.scss";
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";

import { fetchCharacters, fetchAllCharacters } from "../services/fetch";
import { Route, Routes } from "react-router-dom";

function App() {
  // 1. Variables de estado

  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  // 2. useEffect

  useEffect(() => {
    // Cuando carga la página

    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  useEffect(() => {
    // Cargar todos los personajes si hay un filtro de búsqueda activo
    if (filterCharacter !== "") {
      fetchAllCharacters().then((data) => {
        setCharacters(data);
      });
    }
  }, [filterCharacter]); // Se ejecutará cada vez que cambie filterCharacter

  // useEffect para cargar personajes cuando cambia filterHouse
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

  const filteredCharactersHouse = characters.filter(
    (character) => character.house === filterHouse
  );

  const filteredCharacters = filteredCharactersHouse.filter((character) =>
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
                <Filters
                  handleFilterCharacter={handleFilterCharacter}
                  handleFilterHouse={handleFilterHouse}
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
