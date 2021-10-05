const FilterAlphabet = (props) => {
  const handleChange = (ev) => {
    props.handleChangeFilter({
      checked: ev.target.checked,
      id: 'sort',
    });
  };
  return (
    <div>
      <label htmlFor="sort"> Sort by Name</label>
      <input
        id="sort"
        type="checkbox"
        value="sort"
        name="sort"
        onChange={handleChange}
        checked={props.searchSortAtoZ}
      />
    </div>
  );
};
export default FilterAlphabet;
