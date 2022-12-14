import "../styles/components/FilterByName.scss";

const FilterByName = (props) => {
  const handleChangeName = (ev) => {
    ev.preventDefault();
    props.handleFilterName(ev.target.value);
  };

  return (
    <section className="form__section">
      <form onSubmit={props.handleSubmit}>
        <input
          className="form__section--input"
          type="text"
          name="search"
          id="search"
          placeholder="Morty Smith"
          value={props.FilterByName}
          onChange={handleChangeName}
        />
        <div className="error__div">
          <p className="error__div-text">{props.errorMsg}</p>
        </div>
      </form>
    </section>
  );
};

export default FilterByName;
