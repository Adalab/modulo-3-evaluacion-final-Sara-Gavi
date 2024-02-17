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
      <ul className="cards">{renderCharacters}</ul>
    </section>
  );
}

export default CharacterList;
