const FilterBySpecies = (props) => {
  const handleSelectSpecies = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };
  return (
    <div>
      <label htmlFor="species">Species:</label>
      <select name="species" id="species" onChange={handleSelectSpecies}>
        <option value="all">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </div>
  );
};

export default FilterBySpecies;
