import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { movies } from '../../utils/MoviesApi';

import './Movies.css';
import { useEffect, useState } from 'react';
import { savedMovies } from '../../utils/MainApi';

function Movies() {

  const [filterString, setFilterString] = useState(localStorage.getItem('filterString') || '');
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [cardsToRender, setCardsToRender] = useState([]);

  useEffect(() => {
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
      });
  }, [filterString, isShortMovie]);

  return (
    <main className="movies">
      <SearchForm
        filterString={filterString}
        onChangeFilterString={setFilterString}
        onChangeIsShortMovie={setIsShortMovie}
      />
      <MoviesCardList cardsToRender={cardsToRender}/>
    </main>
  );
}

export default Movies;
