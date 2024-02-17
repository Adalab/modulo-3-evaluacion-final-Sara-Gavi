export function fetchCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((reponseData) => {
      return reponseData.map((eachObj) => {
        return {
          id: eachObj.id,
          name: eachObj.name,
          species: eachObj.species,
          image: eachObj.image,
          house: eachObj.house,
          alternate_names: eachObj.alternate_names,
          alive: eachObj.alive,
        };
      });
    });
}

export function fetchAllCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.map((eachObj) => {
        return {
          id: eachObj.id,
          name: eachObj.name,
          species: eachObj.species,
          image: eachObj.image,
          house: eachObj.house,
          alternate_names: eachObj.alternate_names,
          alive: eachObj.alive,
        };
      });
    });
}

// CODIGO PREPARADO PARA HACER fetch de todos los personajes

/* useEffect(() => {
    // Cuando carga la página

    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  useEffect(() => {
    // UseEffect para Cargar todos los personajes si hay un filtro de búsqueda activo
    if (filterCharacter !== "") {
      fetchAllCharacters().then((data) => {
        setCharacters(data);
      });
    }
  }, [filterCharacter]); // Se ejecutará cada vez que cambie filterCharacter*/
