const FilterByEpisode = (props) => {
  const handleChange = (ev) => {
    props.handleChangeFilter({
      value: ev.target.value,
      id: 'episode',
    });
  };
  return (
    <>
      <input
        className="form__input-episode"
        type="number"
        name="episode"
        id="episode"
        key="episode"
        placeholder="Search Episode..."
        value={props.searchEpisode}
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByEpisode;
