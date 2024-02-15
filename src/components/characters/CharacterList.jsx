import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const renderCharacters = characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section className="characters">
      <h2 className="characters__title title--medium">Lista de personajes</h2>
      <ul className="cards">{renderCharacters}</ul>
    </section>
  );
}

export default CharacterList;
