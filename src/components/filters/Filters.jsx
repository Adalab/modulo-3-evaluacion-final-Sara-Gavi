import PropTypes from "prop-types";

function Filters({
  handleFilterCharacter,
  handleFilterHouse,
  selectedHouse,
  filterCharacter,
}) {
  //Define dos funciones de manejo de eventos para actualizar los estados de filtro
  const handleInput = (event) => {
    const newValue = event.currentTarget.value;

    handleFilterCharacter(newValue);
  };

  const handleInputHouse = (event) => {
    handleFilterHouse(event.currentTarget.value);
  };

  return (
    <form className="form">
      <label htmlFor="search" className="search">
        Find your character
      </label>
      <input
        type="text"
        id="search"
        placeholder="Hermione"
        onInput={handleInput}
        className="input"
        value={filterCharacter}
      />
      <label htmlFor="house" className="search">
        Hogwarts houses
      </label>
      <select
        id="house"
        className="select"
        onInput={handleInputHouse}
        value={selectedHouse}
      >
        <option value="Gryffindor" className="value">
          Gryffindor
        </option>
        <option value="Slytherin" className="value">
          Slytherin
        </option>
        <option value="Hufflepuff" className="value">
          Hufflepuff
        </option>
        <option value="Ravenclaw" className="value">
          Ravenclaw
        </option>
      </select>
    </form>
  );
}

Filters.propTypes = {
  handleFilterCharacter: PropTypes.func.isRequired,
  handleFilterHouse: PropTypes.func.isRequired,
  selectedHouse: PropTypes.string.isRequired,
  filterCharacter: PropTypes.string.isRequired,
};

export default Filters;
