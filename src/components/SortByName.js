const SortByName = (props) => {
  const handleChange = (ev) => {
    props.handleChangeFilter({
      checked: ev.target.checked,
      id: 'sort',
    });
  };
  return (
    <div className="form__container-checked">
      <label className="form__label-checked" htmlFor="sort">
        Sort by Name
      </label>
      <input
        className="form__input-checked"
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
export default SortByName;
