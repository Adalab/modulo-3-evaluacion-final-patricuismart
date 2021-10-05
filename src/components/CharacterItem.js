import { Link } from 'react-router-dom';
const dead = <i className="fas fa-skull skull"></i>;
const alive = <i className="fa fa-heartbeat heart " aria-hidden="true"></i>;
const unknown = (
  <i className="fa fa-question-circle unknown" aria-hidden="true"></i>
);

const CharacterItem = (props) => {
  const getStatus = () => {
    if (props.characterData.status === 'Dead') {
      return dead;
    } else if (props.characterData.status === 'Alive') {
      return alive;
    } else {
      return unknown;
    }
  };
  return (
    <Link className="card__link" to={`./character/${props.characterData.id}`}>
      <img
        className="card__img"
        src={props.characterData.photo}
        alt={`Foto de ${props.characterData.name}`}
        title={`Foto de ${props.characterData.name}`}
      />
      <h4 className="card__title">{props.characterData.name}</h4>
      <p className="card__description">{props.characterData.species}</p>
      <p className="card__icon">{getStatus()}</p>
    </Link>
  );
};
export default CharacterItem;
