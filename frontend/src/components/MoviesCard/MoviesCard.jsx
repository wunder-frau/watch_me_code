import { React, useState, pathname, useEffect } from 'react';
import './MoviesCard.css';
import { duration } from '../../utils/constatns';

const MoviesCard = ({
  movie,
  savedMoviesId,
  isSaved,
  deleteMovie,
  handleSaveMovie
}) => {
  const hours = Math.trunc(movie.duration / duration);
  const minutes = movie.duration % duration;
  const time = `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm' : ''}`;

  const trailer = `${isSaved ? movie.trailer : movie.trailerLink}`;

  const isLiked = savedMoviesId && savedMoviesId.some(savedMovieId => savedMovieId === String(movie.id));
  function handleSave(evt) {
    if (isSaved || isLiked) {
      deleteMovie(movie);
      setIsLike(!isLike);
    } else if (!isSaved) {
      handleSaveMovie(movie);
      savedMoviesId.push(String(movie.id));
      setIsLike(!isLike);
    }
  }

  const [isLike, setIsLike] = useState(false);
  useEffect(() => {
    if (isLiked) {
      setIsLike(!isLike);
    }
  });



  return (
    <li className='movies-card'>
      <div className='movies-card__wrap'>
        <a
          href={trailer.startsWith('https') ? trailer : 'https://www.youtube.com'}
          target='_blank'
          rel='noreferrer'
        ><img
            className='movies-card__image'
            src={isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
            alt={movie.name}
          />
        </a>
      </div>
      <div className='movies-card__description'>
        <p className='movies-card__name'>{movie.nameRU}</p>
        <p className='movies-card__duration'>{time}</p>
        {isSaved && (
          <button
            aria-label="delete"
            onClick={handleSave}
            type="button"
            className='movies-card__like-delete'
          />
        )}
        {!isSaved && (
          <button
            aria-label="like"
            type="button"
            onClick={handleSave}
            className={isLiked ? 'movies-card__like movies-card__like_added' : 'movies-card__like'}
          />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
