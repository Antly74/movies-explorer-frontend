import { useEffect, useState } from 'react';
import MoviesCard from './MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { getCardsCountRow } from '../../utils/utils';
import { savedMovies } from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { useInfoTooltip } from '../../hooks/useInfoTooltip';

function MoviesCardList({cardsToRender}) {

  const [cardsCountRow, setCardsCountRow] = useState(getCardsCountRow());
  const [moviesCards, setMoviesCards] = useState([]);
  const [countToShow, setCountToShow] = useState(cardsCountRow.row * cardsCountRow.first);
  const {flagsInfoTooltip, openInfoTooltip, closeInfoTooltip} = useInfoTooltip(() => {});

  useEffect(() => {
    function handleWindowResize() {
      setCardsCountRow(curr => {
        const value = getCardsCountRow();
        if (value.row === curr.row) {
          return curr;
        } else {
          return value;
        }
      });
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {

    if (cardsToRender) {
      setMoviesCards(curr => cardsToRender.filter((element, index) => index < countToShow));
    }

  }, [cardsToRender, countToShow]);

  useEffect(() => {
    setCountToShow(cardsCountRow.row * cardsCountRow.first);
  }, [cardsCountRow])

  function saveMovie(movie) {
    savedMovies.saveMovie(movie)
      .then((newMovie) => {
        const found = cardsToRender.find(element => element.movieId === newMovie.movieId);
        if (found) { found.owner = newMovie.owner } // обновляем cardsToRender
        setMoviesCards(curr => {
          return curr.map(element => element.movieId === newMovie.movieId ?
            {...element, owner: newMovie.owner} :
            element)
        })
      })
      .catch((err) => openInfoTooltip(false, err));
  }

  function deleteMovie(movie) {
    savedMovies.deleteMovie(movie)
      .then(() => {
        if (movie._id) {
          const found = cardsToRender.findIndex(element => element._id === movie._id);
          if (found >= 0) { cardsToRender.splice(found, 1) }
          setMoviesCards(curr => curr.filter(element => element._id !== movie._id))
        } else {
          delete movie.owner;
          setMoviesCards(curr => curr.map(element => element));
        }
      })
      .catch((err) => openInfoTooltip(false, err));
  }

  return (
    <>
      <div className="movies-card-list">
        {moviesCards.map(element => (
          <MoviesCard
            key={element.movieId}
            card={element}
            onSaveMovie={saveMovie}
            onDeleteMovie={deleteMovie}
          />
        ))}
      </div>
      { countToShow < cardsToRender.length ?
        <button
          className="movies__more-button link link_style_green"
          onClick={() => setCountToShow(countToShow + cardsCountRow.row * cardsCountRow.next)}>
          Ещё
        </button> : ''
      }
      <InfoTooltip flags={flagsInfoTooltip} onClose={closeInfoTooltip} />
    </>
  );
}

export default MoviesCardList;
