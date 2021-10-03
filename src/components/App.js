// Fichero src/components/App.js
import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

// Componenetes //
import CharacterList from './CharacterList';
import Filter from './Filters';

// services
import DataApi from '../services/DataApi';
import CharacterDetail from './CharacterDetail';

function App() {
  //estados//
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  //useEffect//
  useEffect(() => {
    DataApi().then((initialData) => {
      setData(initialData);
      console.log('InitialData', initialData);
    });
  }, []);

  //Funciones manejadoras//
  const handleChangeSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  //  USERouteMatch
  const routeData = useRouteMatch('/character/:id');

  // Ternario de 'seguridad' si la ruta no es la que estamos esperando devuelve null
  // Dentro de characterId se guarda la parte variable de la ruta

  const characterId = routeData !== null ? routeData.params.id : '';
  console.log('useRouteMatch', routeData);

  // Buscamos dentro de todos los objetos cual es el que tiene ese id//
  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );
  console.log('SelectedCharacter', selectedCharacter);
  console.log('id', characterId);

  //Funciones para filtrar por
  const filteredData = data.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  );

  return (
    <div>
      <header>
        <h1 className="title">Rick and Morty</h1>
      </header>

      <main className="main">
        <Switch>
          <Route path="/character/:id">
            <section>
              <CharacterDetail character={selectedCharacter} />
            </section>
          </Route>
          <Route exact path="/">
            <section className="form">
              <Filter
                searchName={searchName}
                handleChangeSearchName={handleChangeSearchName}
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
    </div>
  );
}

export default App;
