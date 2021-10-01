// Fichero src/components/App.js
import '../styles/App.scss';
import React, { useState, useEffect } from 'react';

// Componenetes //
import CharacterList from './CharacterList';

// services
import DataApi from '../services/DataApi';

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
        <section className="form">
          <form>
            <label className="form__label" htmlFor="name">
              Filtrar por nombre:
            </label>
            <input
              className="form__input-text"
              type="text"
              name="name"
              id="name"
              value={searchName}
              onChange={handleChangeSearchName}
            />
          </form>
        </section>
        <section>
          <CharacterList data={filteredData} />
        </section>
      </main>
    </div>
  );
}

export default App;
