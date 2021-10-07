import SortByName from './SortByName';
import FiletrByName from './FilterByName';
import FiletrBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import Reset from './Reset';
import FilterByEpisode from './FilterByEpisode';
const Filters = (props) => {
  return (
    <form className="form" onSubmit={(ev) => ev.preventDefault()}>
      <FiletrByName
        searchName={props.searchName}
        handleChangeFilter={props.handleChangeFilter}
      />
      <FiletrBySpecies
        searchSpecies={props.searchSpecies}
        handleChangeFilter={props.handleChangeFilter}
      />
      <FilterByStatus
        searchStatus={props.searchStatus}
        handleChangeFilter={props.handleChangeFilter}
      />
      <FilterByEpisode
        searchEpisode={props.searchEpisode}
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
