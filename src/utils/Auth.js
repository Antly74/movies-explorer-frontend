import Api from "./Api";
import { BASE_URL } from "./constants";

class Auth extends Api {

  register({name, email, password}) {
    const requestOptions = {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({name, email, password})
    };

    return fetch(`${this._baseUrl}/signup`, requestOptions)
      .then(this._handleResponse);
  }

  patchUserInfo({name, email}) {
    const requestOptions = {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({name, email}),
    };

    return fetch(`${this._baseUrl}/users/me`, requestOptions)
      .then(this._handleResponse);
  }

  login({email, password}) {
    const requestOptions = {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({email, password})
    };

    return fetch(`${this._baseUrl}/signin`, requestOptions)
      .then(this._handleResponse);
  }

  getUserInfo() {
    const requestOptions = {
      method: 'GET',
      headers: this._headers,
      credentials: 'include'
    };

    return fetch(`${this._baseUrl}/users/me`, requestOptions)
      .then(this._handleResponse);
  }

  logout() {
    const requestOptions = {
      method: 'POST',
      headers: this._headers,
      credentials: 'include'
    };

    return fetch(`${this._baseUrl}/signout`, requestOptions)
      .then(this._handleResponse);
  }

}

const auth = new Auth({
  baseUrl: BASE_URL
});

export { auth };
