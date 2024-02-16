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
      <h2>{character.name}</h2>
      <p>{character.alternate_names}</p>
      <p>{character.species}</p>
      <p>{character.house}</p>
      <p>{character.alive ? "Vivo" : "Muerto"}</p>
      <p>{character.gender}</p>

      <Link to="/">Volver</Link>
    </div>
  );
}

export default CharacterDetail;
