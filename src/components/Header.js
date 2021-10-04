import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <Link className="detail__link" to="/">
        <img className="logo" src={logo} alt="Logo" title="Logo" />
      </Link>{' '}
    </header>
  );
};
export default Header;
