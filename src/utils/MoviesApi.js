import Api from "./Api";
import { MOVIES_URL, SHORT_MOVIE_DURATION } from "./constants";

class MoviesApi extends Api {
  constructor(options) {
    super(options);
    this._savedMovies = [];
  }

  _getMovies() {
    const requestOptions = {
      method: 'GET',
      headers: this._headers
    };

    return fetch(`${this._baseUrl}/beatfilm-movies`, requestOptions)
      .then(this._handleResponse)
      .then((data) => {
        this._savedMovies = data.map((curr) => {
          return {
            country: curr.country,
            director: curr.director,
            duration: curr.duration,
            year: curr.year,
            description: curr.description,
            image: this._baseUrl + curr.image.url,
            trailerLink: curr.trailerLink,
            thumbnail: this._baseUrl + curr.image.formats.thumbnail.url,
            // owner: null,
            movieId: curr.id,
            nameRU: curr.nameRU,
            nameEN: curr.nameEN,
            //_id: null
          };
        });
        return true;
      });
  }

  _getIsShortMovie(filteredMovies, isShortMovie) {
    if (isShortMovie) {
      return filteredMovies.filter(element => element.duration <= SHORT_MOVIE_DURATION);
    }
    return filteredMovies;
  }

  _getFilteredMoviesFromSaved(filterString, isShortMovie) {
    const filterRegExp = new RegExp(filterString, 'i');
    const result = this._savedMovies.filter((element, index) => {
      return (element.nameRU.search(filterRegExp) >= 0 ||
        element.description.search(filterRegExp) >= 0);
    });

    // сохраняем в localStorage
    localStorage.setItem('filteredMovies', JSON.stringify(result));
    localStorage.setItem('filterString', filterString);
    localStorage.setItem('isShortMovie', isShortMovie);

    return this._getIsShortMovie(result, isShortMovie);
  }

  getFilteredMovies(filterString, isShortMovie) {
    // проверяем локальное хранилище
    if (localStorage.getItem('filterString') === filterString) {
      if (localStorage.getItem('isShortMovie') !== isShortMovie+'') {
        localStorage.setItem('isShortMovie', isShortMovie);
      }
      return Promise.resolve(
        this._getIsShortMovie(
          JSON.parse(localStorage.getItem('filteredMovies')),
          isShortMovie
        )
      );
    }

    if (this._savedMovies.length === 0) {
      return this._getMovies()
        .then(() => this._getFilteredMoviesFromSaved(filterString, isShortMovie))
    } else {
      return Promise.resolve(
        this._getFilteredMoviesFromSaved(filterString, isShortMovie)
      )
    }
  }
}

const movies = new MoviesApi({
  baseUrl: MOVIES_URL
});

export { movies };
