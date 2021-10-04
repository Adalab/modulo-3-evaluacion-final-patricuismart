// Fichero src/components/App.js
import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// Componenetes //
import Header from './Header';
import Footer from './Footer';
import CharacterList from './CharacterList';
import Filters from './Filters';

// services
import DataApi from '../services/DataApi';
import CharacterDetail from './CharacterDetail';

function App() {
  //estados//
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('all');

  //useEffect//
  useEffect(() => {
    DataApi().then((initialData) => {
      setData(initialData);
      //console.log('InitialData', initialData);
    });
  }, []);

  //Funciones manejadoras//

  const handleChangeFilter = (data) => {
    if (data.id === 'name') {
      setSearchName(data.value);
    } else {
      setSearchSpecies(data.value);
    }
  };
  // const handleChangeSearchName = (ev) => {
  //   ev.preventDefault();
  //   setSearchName(ev.currentTarget.value);
  //   console.log(ev.currentTarget.value);
  // };

  // const handleChangeSearchSpecies = (ev) => {
  //   ev.preventDefault();
  //   setSearchSpecies(ev.currentTarget.value);
  //   console.log(ev.currentTarget.value);
  // };

  //  USERouteMatch
  const routeData = useRouteMatch('/character/:id');

  // Ternario de 'seguridad' si la ruta no es la que estamos esperando devuelve null
  // Dentro de characterId se guarda la parte variable de la ruta

  const characterId = routeData !== null ? routeData.params.id : '';
  //console.log('useRouteMatch', routeData);

  // Buscamos dentro de todos los objetos cual es el que tiene ese id//
  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );
  //console.log('SelectedCharacter', selectedCharacter);
  //console.log('este es el console del id', characterId);

  //Funciones para filtrar por
  const filteredData = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )

    .filter(
      (character) =>
        searchSpecies === 'all' || searchSpecies === character.species
    );

  return (
    <div>
      <Header />

      <main className="main">
        <Switch>
          <Route path="/character/:id">
            <section>
              <CharacterDetail selectedCharacter={selectedCharacter} />
            </section>
          </Route>
          <Route exact path="/">
            <section className="form">
              <Filters
                searchName={searchName}
                searchSpecies={searchSpecies}
                handleChangeFilter={handleChangeFilter}
              />
            </section>
            <section>
              <CharacterList data={filteredData} />
            </section>
          </Route>
          <Route>
            <section>
              <p>Oh!! Página no encontrada</p>
            </section>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
