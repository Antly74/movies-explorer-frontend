import { MOVIES_URL } from "./constants";

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = {
      'Content-Type': 'application/json'
    };
    this._allMovies = [];
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then(({message}) => Promise.reject(`${message}`));
  }

  _getMovies() {
    const requestOptions = {
      method: 'GET',
      headers: this._headers
    };

    return fetch(`${this._baseUrl}`, requestOptions)
      .then(this._handleResponse)
      .then((data) => {
        this._allMovies = data;
        return true;
      });
  }

  _getFilteredMoviesFromSaved(filterString) {
    const filterRegExp = new RegExp(filterString, 'i');
    const result = this._allMovies.filter((element, index) => {
      return element.nameRU.search(filterRegExp) >= 0 ||
        element.description.search(filterRegExp) >= 0;
    });

    // сохраняем в localStorage
    localStorage.setItem('filteredMovies', JSON.stringify(result));
    localStorage.setItem('filterString', filterString);

    return result;
  }

  getFilteredMovies(filterString) {
    // проверяем локальное хранилище
    if (localStorage.getItem('filterString') === filterString) {
      return Promise.resolve(JSON.parse(localStorage.getItem('filteredMovies')));
    }

    if (this._allMovies.length === 0) {
      return this._getMovies()
        .then(() => this._getFilteredMoviesFromSaved(filterString))
    } else {
      return Promise.resolve(
        this._getFilteredMoviesFromSaved(filterString)
      )
    }
  }
}

const movies = new MoviesApi({
  baseUrl: MOVIES_URL
});

export { movies };
