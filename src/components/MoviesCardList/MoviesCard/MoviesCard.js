import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { convertMinutesToTime } from '../../../utils/utils';

function MoviesCard({card, onSaveMovie, onDeleteMovie}) {

  const isMoviesLocation = useLocation().pathname === '/movies';

  function handleLikeClick() {
    debugger;
    if (card.owner) {
      onDeleteMovie(card);
    } else {
      onSaveMovie(card);
    }
  }

  return (
    <article className="movies-card">
      <img className="movies-card__picture" src={card.image} alt={card.nameRU}/>
      <div className="movies-card__caption">
        <h2 className="movies-card__caption-text">{card.nameRU}</h2>
        <button
          aria-label="Лайк"
          type="button"
          className={`movies-card__button-like movies-card__button-like_style_${
            isMoviesLocation ? (!!card.owner ? 'on' : 'off') : 'delete'
          } link link_style_green`}
          onClick={handleLikeClick}
        />
      </div>
      <div className="movies-card__duration">{convertMinutesToTime(card.duration)}</div>
    </article>
  );
}

export default MoviesCard;
