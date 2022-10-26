import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {

  const location = useLocation();

  return (
    <footer className="footer">
      { location.pathname === '/profile' ? '' :
        <>
          <div className="footer__desc">Учебный проект Яндекс.Практикум х BeatFilm.</div>
          <div className="footer__bottom">
            <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
            <ul className="footer__links">
              <li className="footer__link-item"><a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a></li>
              <li className="footer__link-item"><a className="footer__link" href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
          </div>
        </>
      }
    </footer>
  );
}

export default Footer;
