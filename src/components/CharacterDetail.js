const CharacterDetail = (props) => {
  console.log('CharacterDetail', props);
  return (
    <a href="#">
      <img
        className="card__img"
        src={props.characterData.photo}
        alt={`Foto de ${props.characterData.name}`}
        title={`Foto de ${props.characterData.name}`}
      />
      <h4 className="card__title">{props.characterData.name}</h4>
      <p className="card__description">{props.characterData.species}</p>
    </a>
  );
};
export default CharacterDetail;
