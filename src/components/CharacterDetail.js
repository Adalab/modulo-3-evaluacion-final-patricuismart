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
      <div>
        <section>
          <Link to="/">Volver Atrás</Link>
          <img
            className="card__img"
            src={props.selectedCharacter.photo}
            alt={`Foto de ${props.selectedCharacter.name}`}
            title={`Foto de ${props.selectedCharacter.name}`}
          />
          <ul>
            <li>Nombre: {props.selectedCharacter.origin.name}</li>
            <li>Status: {props.selectedCharacter.status}</li>
            <li>Species: {props.selectedCharacter.species}</li>
            <li>Origin: {props.selectedCharacter.origin.name}</li>
            <li>Episodes: {props.selectedCharacter.episodes}</li>
          </ul>
        </section>
      </div>
    );
  }
};
export default CharacterDetail;
