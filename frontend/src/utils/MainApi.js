export const BASE_URL = "http://localhost:5001"; // "https://api.iresta.rest";

class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _updateToken() {
    this._headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    this._updateToken();
    return fetch(`${this._baseUrl}/users/me`, this._options).then(
      this._checkResponse
    );
  }

  getMovies() {
    this._updateToken();
    return fetch(`${this._baseUrl}/movies`, this._options).then(
      this._checkResponse
    );
  }

  patchProfileInfo(inputsValue) {
    const newOptions = {
      ...this._options,
      body: JSON.stringify(inputsValue),
      method: "PATCH",
    };
    return fetch(`${this._baseUrl}/users/me`, newOptions).then(
      this._checkResponse
    );
  }

  saveMovie(movie) {
    const newOptions = {
      ...this._options,
      method: "POST",
      body: JSON.stringify({
        country: movie.country || "null",
        director: movie.director || "null",
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink
          ? movie.trailerLink.startsWith("https")
            ? movie.trailerLink
            : "https://www.youtube.com"
          : "https://www.youtube.com",
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || "null",
      }),
    };
    return fetch(`${this._baseUrl}/movies`, newOptions).then(
      this._checkResponse
    );
  }

  removeMovie(movieId) {
    const newOptions = {
      ...this._options,
      method: "DELETE",
    };
    return fetch(`${this._baseUrl}/movies/${movieId}`, newOptions).then(
      this._checkResponse
    );
  }
}

export default new Api({
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
