import FilterAlphabet from './FilterAlphabet';
import FiletrByName from './FilterByName';
import FiletrBySpecies from './FilterBySpecies';
import Reset from './Reset';
const Filters = (props) => {
  //console.log('filter', props);
  return (
    <form onSubmit={(ev) => ev.preventDefaul()}>
      <FiletrByName
        searchName={props.searchName}
        handleChangeFilter={props.handleChangeFilter}
      />
      <FiletrBySpecies
        searchSpecies={props.searchSpecies}
        handleChangeFilter={props.handleChangeFilter}
      />
      <FilterAlphabet
        searchSortAtoZ={props.searchSortAtoZ}
        handleChangeFilter={props.handleChangeFilter}
      />
      <Reset handleReset={props.handleReset} />
    </form>
  );
};
export default Filters;
