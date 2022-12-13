const FilterByName = (props) => {
  const handleChangeName = (ev) => {
    ev.preventDefault();
    props.handleFilterName(ev.target.value);
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Morty Smith"
        value={props.FilterByName}
        onChange={handleChangeName}
      />
    </form>
  );
};

export default FilterByName;
