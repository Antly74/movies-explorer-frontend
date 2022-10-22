import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { movies } from '../../utils/MoviesApi';

import './Movies.css';
import { useEffect, useState } from 'react';

function Movies() {

  const [cardsToRender, setCardsToRender] = useState([]);

  function handleSearch(filterString) {
    movies.getFilteredMovies(filterString)
      .then((data) => {
        console.log(`data.length = ${data.length}`);
        setCardsToRender(data);
      });
  }

  return (
    <main className="movies">
      <SearchForm onSearch={handleSearch}/>
      <MoviesCardList cardsToRender={cardsToRender}/>

    </main>
  );
}

export default Movies;
