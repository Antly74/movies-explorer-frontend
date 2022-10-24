import Api from "./Api";
import { BASE_URL, SHORT_MOVIE_DURATION } from "./constants";

class MainApi extends Api {

  constructor(options) {
    super(options);
    this._savedMovies = undefined;
  }

  saveMovie(movie) {
    const requestOptions = {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(movie)
    };

    return fetch(`${this._baseUrl}/movies`, requestOptions)
      .then(this._handleResponse)
      .then((data) => {
        this._savedMovies.push(data);
        return data;
      });
  }

  deleteMovie(movie) {
    if (!movie._id && !this._savedMovies) {
      return Promise.reject('Удаление невозможно!');
    }

    let id = movie._id;
    if (!id) {
      const found = this._savedMovies.find(element => element.movieId === movie.movieId);
      if (!found) {
        return Promise.reject('Удаление невозможно, не найден _id!');
      }
      id = found._id;
    }

    const requestOptions = {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    };

    return fetch(`${this._baseUrl}/movies/${id}`, requestOptions)
      .then(this._handleResponse)
      .then(data => {
        if (this._savedMovies) {
          this._savedMovies = this._savedMovies.filter(element => element._id !== id)
        }
        return data;
      });
  }

  _getMovies() {
    const requestOptions = {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    };

    return fetch(`${this._baseUrl}/movies`, requestOptions)
      .then(this._handleResponse)
      .then((data) => {
        this._savedMovies = data;
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

    return this._getIsShortMovie(result, isShortMovie);
  }

  getFilteredMovies(filterString, isShortMovie) {
    if (!this._savedMovies) {
      return this._getMovies()
        .then(() => this._getFilteredMoviesFromSaved(filterString, isShortMovie))
    } else {
      return Promise.resolve(
        this._getFilteredMoviesFromSaved(filterString, isShortMovie)
      )
    }
  }

  getMovies() {
    if (!this._savedMovies) {
      return this._getMovies()
        .then(() => this._savedMovies)
    } else {
      return Promise.resolve(
        this._savedMovies
      )
    }
  }

  logoff() {
    this._savedMovies = undefined;
  }

}

const savedMovies = new MainApi({
  baseUrl: BASE_URL
});

export { savedMovies };
