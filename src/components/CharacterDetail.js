import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log('CharacterDetail', props);
  if (props.selectedCharacter === undefined) {
    return (
      <section>
        <p>Personaje no encontrado</p>
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
              Status: {props.selectedCharacter.status}
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
          </ul>
        </section>
      </div>
    );
  }
};
export default CharacterDetail;
