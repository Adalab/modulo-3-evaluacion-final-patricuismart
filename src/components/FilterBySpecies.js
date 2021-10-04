const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleChangeFilter({
      value: ev.target.value,
      id: 'species',
    });
  };
  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Género:
      </label>
      <select
        className="form__input-select"
        name="species"
        key="species"
        id="species"
        value={props.searchSpecies}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Alien">Allien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
