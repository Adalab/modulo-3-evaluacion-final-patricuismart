const CharacterDetail = (props) => {
  console.log('CharacterDetail', props);
  if (props.character === undefined) {
    return (
      <section>
        <p>Página no encontrada</p>
      </section>
    );
  } else {
    return (
      <section>
        <img
          className="card__img"
          src={props.character.photo}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <ul>
          <li>Nombre: {props.character.name}</li>
          <li>Status: {props.character.status}</li>
          <li>Species: {props.character.species}</li>
          <li>Origin: {props.character.origin}</li>
          <li>Episodes: {props.character.episodes}</li>
        </ul>
      </section>
    );
  }
};
export default CharacterDetail;
