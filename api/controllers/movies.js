const BadRequest = require("../errors/BadRequest");
const NotFound = require("../errors/NotFound");
const Forbidden = require("../errors/Forbidden");
const Movie = require("../models/movie");

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.send({ data: movies }))
    .catch((err) => {
      next(err);
    });
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    owner: req.user._id,
    movieId,
  })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.message === "ValidationError") {
        next(new BadRequest("Invalid data provided when creating the movie"));
      }
      next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const id = req.user._id;
  Movie.findByIdAndRemove(req.params._id)
    .orFail(new Error("NotFound"))
    .then((movie) => {
      if (movie.owner.toString() !== id) {
        throw new Forbidden("No rights to delete the movie");
      }
      res.send({ data: movie });
    })
    .catch((err) => {
      if (err.message === "NotFound") {
        next(new NotFound("Movie with the specified id not found"));
      }
      next(err);
    });
};
