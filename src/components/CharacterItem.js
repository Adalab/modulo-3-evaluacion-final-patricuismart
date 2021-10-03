import { Link } from 'react-router-dom';

const CharacterItem = (props) => {
  return (
    <Link to={`./charcater/${props.characterData.id}`}>
      <>
        <img
          className="card__img"
          src={props.characterData.photo}
          alt={`Foto de ${props.characterData.name}`}
          title={`Foto de ${props.characterData.name}`}
        />
        <h4 className="card__title">{props.characterData.name}</h4>
        <p className="card__description">{props.characterData.species}</p>
      </>
    </Link>
  );
};
export default CharacterItem;
