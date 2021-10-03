import logo from '../images/logo.png';
const Header = () => {
  return (
    <header className="header">
      <h1 className="title"></h1>
      <img className="logo" src={logo} alt="Logo" title="Logo" />
    </header>
  );
};
export default Header;
