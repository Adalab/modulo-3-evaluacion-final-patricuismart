const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleChangeFilter({
      value: ev.target.value,
      id: 'name',
    });
  };
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
        key="name"
        placeholder="Ej: Rick Sanchez"
        value={props.searchName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
