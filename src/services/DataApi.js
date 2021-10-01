function getDataFromApi() {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((json) => {
      //limpio datos que me llegan Api con el map
      return json.results.map((character) => {
        return {
          id: character.id,
          photo: character.image,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin,
          episode: character.episode,
        };
      });
    });
}
export default getDataFromApi;
