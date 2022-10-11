import PortfolioLink from './PortfolioLink/PortfolioLink';
import Section from '../../Section/Section';
import './Portfolio.css';

function Portfolio() {
  return (
    <Section
      sectionStyle="darkwide"
      headerStyle="small"
      containerStyle="normal"
      name="Портфолио"
    >
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <PortfolioLink name="Статичный сайт" href="https://antly74.github.io/how-to-learn/" />
        </li>
        <li className="portfolio__link-item">
          <PortfolioLink name="Адаптивный сайт" href="https://antly74.github.io/russian-travel/" />
        </li>
        <li className="portfolio__link-item">
          <PortfolioLink name="Одностраничное приложение" href="https://mesto.antly74.nomoredomains.sbs/" />
        </li>
      </ul>
    </Section>
  );
}

export default Portfolio;
