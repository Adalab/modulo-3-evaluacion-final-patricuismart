// Fichero src/components/App.js
import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// Componenetes //
import Header from './Header';
import Footer from './Footer';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

// services
import DataApi from '../services/DataApi';
import ls from '../services/local-storage';
import PageNotFound from './PageNotFound';

function App() {
  //estados//
  const [data, setData] = useState(ls.get('data', []));
  const [searchName, setSearchName] = useState(ls.get('searchName', ''));
  const [searchSpecies, setSearchSpecies] = useState(
    ls.get('searchSpecies', 'all')
  );
  const [searchSortAtoZ, setSearchSortAtoZ] = useState(
    ls.get('searchSortAtoZ', 'false')
  );

  // Reset
  const handleReset = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  //useEffect//
  useEffect(() => {
    DataApi().then((initialData) => {
      setData(initialData);
      //console.log('InitialData', initialData);
    });
  }, []);

  //Local Storage

  useEffect(() => {
    ls.set('data', data);
  }, [data]);
  useEffect(() => {
    ls.set('searchName', searchName);
  }, [searchName]);
  useEffect(() => {
    ls.set('searchSpecies', searchSpecies);
  }, [searchSpecies]);

  useEffect(() => {
    ls.set('searchSortAtoZ', searchSortAtoZ);
  }, [searchSortAtoZ]);

  //Funciones manejadoras//

  const handleChangeFilter = (data) => {
    if (data.id === 'name') {
      setSearchName(data.value);
    } else if (data.id === 'species') {
      setSearchSpecies(data.value);
    } else {
      setSearchSortAtoZ(data.checked);
    }
  };

  //  UseRouteMatch
  const routeData = useRouteMatch('/character/:id');

  // Ternario de 'seguridad' si la ruta no es la que estamos esperando devuelve null
  // Dentro de characterId se guarda la parte variable de la ruta

  const characterId = routeData !== null ? routeData.params.id : '';
  //console.log('useRouteMatch', routeData);

  // Buscamos dentro de todos los objetos cual es el que tiene ese id//
  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );
  console.log('SelectedCharacter', selectedCharacter);
  console.log('este es el console del id', characterId);

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
  //si está clickado el checkbox ordena alfabéticamente
  if (searchSortAtoZ) {
    filteredData.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  return (
    <div>
      <Header />

      <main className="main">
        <Switch>
          {/*pintar el detalle de un personaje */}
          <Route exact path="/character/:id">
            <section>
              <CharacterDetail selectedCharacter={selectedCharacter} />
            </section>
          </Route>

          {/*listado personajes con/sin filtro*/}
          <Route exact path="/">
            <section className="form">
              <Filters
                searchName={searchName}
                searchSpecies={searchSpecies}
                handleChangeFilter={handleChangeFilter}
                handleReset={handleReset}
              />
            </section>
            <section className="cards">
              <CharacterList data={filteredData} />
            </section>
          </Route>

          {/*ruta escrita mal */}
          <Route>
            <section className="notfound">
              <PageNotFound />
            </section>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
