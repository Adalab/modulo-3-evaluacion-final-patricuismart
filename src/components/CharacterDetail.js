import { Link } from 'react-router-dom';

const dead = <i className="fas fa-skull skull"></i>;
const alive = <i className="fa fa-heartbeat heart " aria-hidden="true"></i>;
const unknown = (
  <i className="fa fa-question-circle unknown" aria-hidden="true"></i>
);

const CharacterDetail = (props) => {
  // console.log('SelectedChar', props.selectedCharacter);

  const getStatus = () => {
    if (props.selectedCharacter.status === 'Dead') {
      return dead;
    } else if (props.selectedCharacter.status === 'Alive') {
      return alive;
    } else {
      return unknown;
    }
  };
  if (props.selectedCharacter === undefined) {
    return (
      <section className="undefined">
        <Link className="detail__link" to="/">
          <i className="fas fa-times-circle icon"></i>
        </Link>
        <p className="undefined__paragraph">Personaje no encontrado</p>
      </section>
    );
  } else {
    return (
      <div className="detail__container">
        <Link className="detail__link" to="/">
          <i className="fas fa-times-circle icon"></i>
        </Link>
        <section className="detail__item">
          <img
            className="detail__img"
            src={props.selectedCharacter.photo}
            alt={`Foto de ${props.selectedCharacter.name}`}
            title={`Foto de ${props.selectedCharacter.name}`}
          />
          <ul className="detail__text">
            <li className="detail__title">
              Nombre: {props.selectedCharacter.name}
            </li>
            <li className="detail__description">
              Species: {props.selectedCharacter.species}
            </li>
            <li className="detail__description">
              Origin: {props.selectedCharacter.origin.name}
            </li>
            <li className="detail__description">
              Episodes: {props.selectedCharacter.episode.length}
            </li>
            <li className="detail__description">{getStatus()}</li>
          </ul>
        </section>
      </div>
    );
  }
};
export default CharacterDetail;
