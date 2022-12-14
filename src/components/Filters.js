import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
const Filters = (props) => {
  return (
    <>
      <FilterByName
        errorMsg={props.errorMsg}
        handleSubmit={props.handleSubmit}
        FilterByName={props.FilterByName}
        handleFilterName={props.handleFilterName}
      ></FilterByName>
      <FilterBySpecies
        handleFilterSpecies={props.handleFilterSpecies}
      ></FilterBySpecies>
    </>
  );
};

export default Filters;
