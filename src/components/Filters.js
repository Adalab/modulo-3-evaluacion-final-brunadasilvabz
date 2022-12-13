import FilterByName from "./FilterByName";

const Filters = (props) => {
  return (
    <FilterByName handleFilterName={props.handleFilterName}></FilterByName>
  );
};

export default Filters;
