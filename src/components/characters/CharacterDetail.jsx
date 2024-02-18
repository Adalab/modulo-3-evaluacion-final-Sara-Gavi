//useParams ara obtener el ID del personaje
import { Link, useParams } from "react-router-dom";
import imageCard from "../../images/imagencarta.png";
import PropTypes from "prop-types";

//Utiliza la función findCharacter para encontrar y mostrar los detalles del personaje
function CharacterDetail({ findCharacter }) {
  const params = useParams();
  const character = findCharacter(params.id);

  return (
    <div className="details__content">
      <div className="content__card__back">
        <Link to="/" className="card__back">
          Go back
        </Link>
      </div>
      <div className="details__card">
        <img
          className="card__image"
          src={character.image || imageCard}
          alt={character.name}
        />

        <h2 className="card__name">{character.name}</h2>
        <p className="card__text">{character.alternate_names}</p>
        <p className="card__text">{character.species}</p>
        <p className="card__text">{character.house}</p>
        <p className="card__text">{character.alive ? "Alive" : "Death"}</p>
        <p className="card__text">{character.gender}</p>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};

export default CharacterDetail;
