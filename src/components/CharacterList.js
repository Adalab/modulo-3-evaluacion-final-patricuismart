import CharacterItem from './CharacterItem';

const CharacterList = (props) => {
  const html = props.data.map((characterData, index) => (
    <li key={index} className="card__item">
      <CharacterItem characterData={characterData} />
    </li>
  ));

  return <ul className="card__list">{html}</ul>;
};
export default CharacterList;
