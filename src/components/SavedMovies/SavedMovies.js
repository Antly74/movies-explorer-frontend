import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { savedMovies } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

function SavedMovies() {

  const [filterString, setFilterString] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    savedMovies.getFilteredMovies(filterString, isShortMovie)
      .then((savedData) => {
        setCardsToRender(savedData);
      })
      .catch((err) => setErrorMessage(`Во время запроса произошла ошибка (${err}). Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`))
      .finally(() => setIsLoading(false));
  }, [filterString, isShortMovie]);

  return (
    <main className="saved-movies">
      <SearchForm
        filterString={filterString}
        onChangeFilterString={setFilterString}
        isShortMovie={isShortMovie}
        onChangeIsShortMovie={setIsShortMovie}
        isErrorOnEmpty={false}
      />
      {isLoading ? <Preloader /> :
        !!errorMessage ? <div>{errorMessage}</div> :
          cardsToRender.length > 0 ? <MoviesCardList cardsToRender={cardsToRender}/> :
            filterString.length > 0 ? <div>Нет сохраненных фильмов удовлетворяющих условиям поиска</div> :
              'Нет сохраненных фильмов' }
    </main>
  );
}

export default SavedMovies;
