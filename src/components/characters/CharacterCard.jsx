function CharacterCard({ character }) {
  const placeholderImageURL =
    "https://via.placeholder.com/210x295/EEEEEE/666666/?text=No+Image";

  return (
    <div className="card">
      <img
        className="card__image"
        src={character.image || placeholderImageURL}
        alt={character.name}
      />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </div>
  );
}

export default CharacterCard;
