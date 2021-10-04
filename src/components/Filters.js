import FiletrByName from './FilterByName';
import FiletrBySpecies from './FilterBySpecies';

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
    </form>
  );
};
export default Filters;
