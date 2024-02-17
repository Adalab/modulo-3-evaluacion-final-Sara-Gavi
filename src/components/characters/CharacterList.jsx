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
      {renderCharacters.length > 0 ? (
        <ul className="cards">{renderCharacters}</ul>
      ) : (
        <p className="cards__message">
          Oops! The character is not in this house{" "}
        </p>
      )}
    </section>
  );
}

export default CharacterList;
