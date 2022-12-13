import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <FilterByName
      filterByName={props.filterByName}
      handleFilterName={props.handleFilterName}
    ></FilterByName>
  );
};

export default Filters;
