import './PortfolioLink.css';

function PortfolioLink({name, link, ...props}) {
  return (
    <a className="portfolio-link link" target="_blank" rel="noopener noreferrer" {...props}>
      <p className="portfolio-link__text">{name}</p>
      <div className="portfolio-link__image link link_style_green"></div>
    </a>
  );
}

export default PortfolioLink;
