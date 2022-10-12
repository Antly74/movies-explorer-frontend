import './MoviesCard.css';
import testpic from '../../../images/testpic.png';

function MoviesCard() {
  return (
    <article className="movies-card">
      <img className="movies-card__picture" src={testpic} alt="33 слова о дизайне"/>
      <div className="movies-card__caption">
        <h2 className="movies-card__caption-text">33 слова о дизайне asdfasdf ad ad fasd fasdfasdf asdfsd adf asdf adfasd fasd fad fasdf asd fasdf adf 7777777</h2>
        <button aria-label="Лайк" type="button" className="movies-card__button-like link link_style_green" />
      </div>
      <div className="movies-card__duration">1ч 42м</div>
    </article>
  );
}

export default MoviesCard;
