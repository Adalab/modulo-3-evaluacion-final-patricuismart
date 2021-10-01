const Filter = (props) => {
  console.log('filter', props);
  return (
    <form>
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
    </form>
  );
};
export default Filter;
