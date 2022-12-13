import "../styles/components/FilterBySpecies.scss";

const FilterBySpecies = (props) => {
  const handleSelectSpecies = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };
  return (
    <section className="filterSection">
      <label className="filterSection__label" htmlFor="species">
        Species:
      </label>
      <select
        className="filterSection__select"
        name="species"
        id="species"
        onChange={handleSelectSpecies}
      >
        <option value="all">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </section>
  );
};

export default FilterBySpecies;
