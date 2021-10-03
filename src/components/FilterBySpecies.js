const FilterBySpecies = (props) => {
  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Género:
      </label>
      <select
        className="form__input-select"
        name="species"
        id="species"
        value={props.searchSpecies}
        onChange={props.handleChangeSearchSpecies}
      >
        <option value="all">Todos</option>
        <option value="allien">Allien</option>
        <option value="human">Human</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
