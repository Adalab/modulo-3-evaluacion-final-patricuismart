import CharacterDetail from './CharacterDetail';

const CharacterList = (props) => {
  console.log('CharacterList', props);

  const html = props.data.map((characterData, index) => (
    <li key={index} className="card__item">
      <CharacterDetail characterData={characterData} />
    </li>
  ));

  return <ul className="card__list">{html}</ul>;
};
export default CharacterList;
