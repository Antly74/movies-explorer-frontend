import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { savedMovies } from '../../utils/MainApi';

function SavedMovies() {

  const [filterString, setFilterString] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [cardsToRender, setCardsToRender] = useState([]);

  useEffect(() => {
    savedMovies.getFilteredMovies(filterString, isShortMovie)
      .then((savedData) => {
        setCardsToRender(savedData);
      });
  }, [filterString, isShortMovie]);

  return (
    <main className="saved-movies">
      <SearchForm
        filterString={filterString}
        onChangeFilterString={setFilterString}
        onChangeIsShortMovie={setIsShortMovie}
      />
      <MoviesCardList cardsToRender={cardsToRender}/>
    </main>
  );
}

export default SavedMovies;
