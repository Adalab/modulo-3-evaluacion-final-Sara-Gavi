//Estilos
import "../scss/App.scss";
//Para manejar el enrutamiento en la aplicación
import { Route, Routes } from "react-router-dom";

//Componentes definidos en otros archivos que se importan aquí
import CharacterList from "./characters/CharacterList";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";
import Header from "./Header";

//hooks para permitir agregar estado y efectos a componentes
import { useState, useEffect } from "react";

function App() {
  // 1. Variables de estado

  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  // 2. useEffect
  // Cargar los personajes desde una API cuando cambia el estado filterHouse
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${filterHouse}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, [filterHouse]);

  // 3. funciones de eventos
  //Para actualizar los estados filterCharacter y filterHouse.

  const handleFilterCharacter = (filterValue) => {
    setFilterCharacter(filterValue);
  };

  const handleFilterHouse = (value) => {
    setFilterHouse(value);
  };

  // 4. variables para el html
  //Filtra los personajes por Casa
  const filteredCharactersHouse = characters.filter(
    (character) => character.house === filterHouse
  );
  //Después del filtrado de personajes por casa, esta variable aplica un segundo filtro con el nombre del personaje
  const filteredCharacters = filteredCharactersHouse.filter((character) =>
    character.name.toLowerCase().includes(filterCharacter.toLowerCase())
  );
  // Busca un personaje específico por su ID
  const findCharacter = (id) => {
    return characters.find((character) => character.id === id);
  };

  // 5. El html en el return
  //Renderiza el contenido principal de la aplicación. Utiliza Routes y Route para manejar el enrutamiento
  return (
    <div className="page">
      <Header />
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
