import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

//Renderiza la lista de cartas de personajes
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

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
