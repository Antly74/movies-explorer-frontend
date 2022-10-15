import './LogoLink.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function LogoLink({onClick}) {
  return (
    <Link to="/" className="logo-link link link_style_green">
      <img src={logo} alt="Главная"/>
    </Link>
  );
}

export default LogoLink;
