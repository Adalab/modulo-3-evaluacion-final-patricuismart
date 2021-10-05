import SortByName from './SortByName';
import FiletrByName from './FilterByName';
import FiletrBySpecies from './FilterBySpecies';
import Reset from './Reset';
const Filters = (props) => {
  //console.log('filter', props);
  return (
    <form className="form" onSubmit={(ev) => ev.preventDefaul()}>
      <FiletrByName
        searchName={props.searchName}
        handleChangeFilter={props.handleChangeFilter}
      />
      <FiletrBySpecies
        searchSpecies={props.searchSpecies}
        handleChangeFilter={props.handleChangeFilter}
      />
      <SortByName
        searchSortAtoZ={props.searchSortAtoZ}
        handleChangeFilter={props.handleChangeFilter}
      />
      <Reset handleReset={props.handleReset} />
    </form>
  );
};
export default Filters;
