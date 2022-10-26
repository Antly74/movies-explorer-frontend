export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = {
      'Content-Type': 'application/json'
    };
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then((err) => {
        return Promise.reject(
          err.message === 'Validation failed' ?
            err.validation.body ? err.validation.body.keys.join() + ': ' + err.validation.body.message
              : err.validation.params ? err.validation.params.keys.join() + ': ' + err.validation.params.message
                : ''
                  : err.message
        );
      });
  }
}
