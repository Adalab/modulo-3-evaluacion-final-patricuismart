// Fichero src/components/App.js
import '../styles/App.scss';

function App() {
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
            />
          </form>
        </section>
        <section className="card__list">
          <article className="card__item">
            <a href="#">
              <img className="card__img" src="#" alt="#" title="#" />
              <h4 className="card__title">Nombre</h4>
              <p className="card__description">Especie</p>
            </a>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
