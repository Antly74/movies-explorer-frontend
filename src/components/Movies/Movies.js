import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import './Movies.css';

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
      <button className="movies__more-button link link_style_green">Ещё</button>
    </div>
  );
}

export default Movies;
