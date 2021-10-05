const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleChangeFilter({
      value: ev.target.value,
      id: 'status',
    });
  };
  return (
    <>
      <select
        className="form__input-status"
        name="status"
        key="status"
        id="status"
        value={props.searchStatus}
        onChange={handleChange}
      >
        <option value="all">Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </>
  );
};
export default FilterByStatus;
