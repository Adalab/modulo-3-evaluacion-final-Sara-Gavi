import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);
  const placeholderImageURL =
    "https://via.placeholder.com/210x295/EEEEEE/666666/?text=No+Image";

  return (
    <div className="details">
      <img
        className="card__image"
        src={character.image || placeholderImageURL}
        alt={character.name}
      />
      <h2 className="card__name">{character.name}</h2>
      <p className="card__text">{character.alternate_names}</p>
      <p className="card__text">{character.species}</p>
      <p className="card__text">{character.house}</p>
      <p className="card__text">{character.alive ? "Alive" : "Death"}</p>
      <p className="card__text">{character.gender}</p>

      <Link to="/" className="card__back">
        Go back
      </Link>
    </div>
  );
}

export default CharacterDetail;
