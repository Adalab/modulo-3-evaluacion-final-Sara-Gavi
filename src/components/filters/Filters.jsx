function Filters() {
  return (
    <form className="form">
      <label htmlFor="search">Buscar por nombre:</label>
      <input type="text" id="search" placeholder="Buscar..." />
      <label htmlFor="house">Filtrar por casa:</label>
      <select id="house">
        <option value="">Todas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </form>
  );
}

export default Filters;
