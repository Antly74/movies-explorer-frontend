import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { movies } from '../../utils/MoviesApi';

import './Movies.css';
import { useEffect, useState } from 'react';
import { savedMovies } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

function Movies() {

  const [filterString, setFilterString] = useState(localStorage.getItem('filterString') || '');
  const [isShortMovie, setIsShortMovie] = useState(localStorage.getItem('isShortMovie') === 'true');
  const [cardsToRender, setCardsToRender] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (filterString.length > 0) {
      setIsLoading(true);
      Promise.all([
        movies.getFilteredMovies(filterString, isShortMovie),
        savedMovies.getMovies()
      ])
        .then(([allData, savedData]) => {
          setCardsToRender(allData.map((movie) => {
            const found = savedData.find(element => element.movieId === movie.movieId);
            if (found) {
              movie.owner = found.owner;
            }
            return movie;
          }));
          setErrorMessage('');
        })
        .catch((err) => setErrorMessage(`Во время запроса произошла ошибка (${err}). Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`))
        .finally(() => setIsLoading(false));
    }
  }, [filterString, isShortMovie]);

  return (
    <main className="movies">
      <SearchForm
        filterString={filterString}
        onChangeFilterString={setFilterString}
        isShortMovie={isShortMovie}
        onChangeIsShortMovie={setIsShortMovie}
        isErrorOnEmpty={true}
      />
      {isLoading ? <Preloader /> :
        !!errorMessage ? <div>{errorMessage}</div> :
          cardsToRender.length > 0 ? <MoviesCardList cardsToRender={cardsToRender}/> :
            filterString.length > 0 ? <div>Ничего не найдено</div> : '' }
    </main>
  );
}

export default Movies;
