import { Link } from "react-router-dom";
import imageCard from "../../images/imagencarta.png";

function CharacterCard({ character }) {
  return (
    <Link to={"/character/" + character.id}>
      <div className="card__character">
        <img
          className="card__image"
          src={character.image || imageCard}
          alt={character.name}
        />
        <h2 className="card__name">{character.name}</h2>
        <p className="card__species">{character.species}</p>
      </div>
    </Link>
  );
}

export default CharacterCard;
