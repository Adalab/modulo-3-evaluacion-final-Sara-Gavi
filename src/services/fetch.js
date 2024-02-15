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
        };
      });
    });
}
