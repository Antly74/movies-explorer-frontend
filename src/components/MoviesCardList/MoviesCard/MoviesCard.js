import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { convertMinutesToTime } from '../../../utils/utils';

function MoviesCard({card, isLiked}) {

  const isMoviesLocation = useLocation().pathname === '/movies';

  return (
    <article className="movies-card">
      <img className="movies-card__picture" src={'https://api.nomoreparties.co' + card.image.formats.small.url} alt={card.nameRU}/>
      <div className="movies-card__caption">
        <h2 className="movies-card__caption-text">{card.nameRU}</h2>
        <button
          aria-label="Лайк"
          type="button"
          className={`movies-card__button-like movies-card__button-like_style_${
            isMoviesLocation ? (isLiked ? 'on' : 'off') : 'delete'
          } link link_style_green`}
        />
      </div>
      <div className="movies-card__duration">{convertMinutesToTime(card.duration)}</div>
    </article>
  );
}

export default MoviesCard;
