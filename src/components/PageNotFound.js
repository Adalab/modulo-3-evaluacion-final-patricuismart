import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <>
      <Link className="detail__link" to="/">
        <i className="fas fa-times-circle icon"></i>
      </Link>
      <p className="notfound__paragraph">Oh!! Página no encontrada</p>
    </>
  );
};
export default PageNotFound;
