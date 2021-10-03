import FiletrByName from './FilterByName';
import FiletrBySpecies from './FilterBySpecies';

const Filters = (props) => {
  //console.log('filter', props);
  return (
    <form>
      <FiletrByName
        searchName={props.searchName}
        handleChangeSearchName={props.handleChangeSearchName}
      />
      <FiletrBySpecies
        searchSpecies={props.searchSpecies}
        handleChangeSearchSpecies={props.handleChangeSearchSpecies}
      />
    </form>
  );
};
export default Filters;
