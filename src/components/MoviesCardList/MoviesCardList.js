import { useEffect, useState } from 'react';
import MoviesCard from './MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { getCardsCountRow } from '../../utils/utils';

function MoviesCardList({cardsToRender}) {

  const [cardsCountRow, setCardsCountRow] = useState(getCardsCountRow());
  const [moviesCard, setMoviesCard] = useState(cardsToRender.filter((element, index) => index <= cardsCountRow * 3));

  useEffect(() => {
    function handleWindowResize() {
      setCardsCountRow(getCardsCountRow());
    }

    window.addEventListener('resize', handleWindowResize);

    // if (cardsToRender) {
    //   setMoviesCard(cardsToRender.filter((element, index) => index <= cardsCountRow * 3));
    // }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="movies-card-list">
        {moviesCard.map(element => (
          <MoviesCard key={element._id} card={element} isLiked={false} />
        ))}
      </div>
      <button className="movies__more-button link link_style_green">Ещё</button>
    </>
  );
}

export default MoviesCardList;
