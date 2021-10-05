import wubba from '../images/pngwing.png';
const Footer = () => {
  return (
    <footer className="footer">
      <img className="wubba" src={wubba} alt="Rick" title="Rick" />
      <p className="footer__paragraph"> Developed by Patricia Martínez</p>
    </footer>
  );
};

export default Footer;
