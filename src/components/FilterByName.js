const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleChangeFilter({
      value: ev.target.value,
      id: 'name',
    });
  };
  return (
    <>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        key="name"
        placeholder="Search Character..."
        value={props.searchName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
