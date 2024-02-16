function Filters({ handleFilterCharacter, handleFilterHouse, selectedHouse }) {
  const handleInput = (event) => {
    handleFilterCharacter(event.currentTarget.value);
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

export default Filters;
