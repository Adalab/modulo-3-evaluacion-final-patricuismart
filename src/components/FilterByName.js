const FilterByName = (props) => {
  console.log('FilterByName', props);
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
    </>
  );
};

export default FilterByName;
