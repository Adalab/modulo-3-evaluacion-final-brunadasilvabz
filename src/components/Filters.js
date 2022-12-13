import FilterByName from "./FilterByName";
// import FilterBySpecies from "./FilterBySpecies";
const Filters = (props) => {
  console.log(props);
  return (
    <>
      <FilterByName
        handleSubmit={props.handleSubmit}
        filterByName={props.filterByName}
        handleFilterName={props.handleFilterName}
      ></FilterByName>
      {/* <FilterBySpecies
        handleFilterSpecies={props.handleFilterSpecies}
      ></FilterBySpecies> */}
    </>
  );
};

export default Filters;
