import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Movie({ movie }) {
  const { user, toggleFavoriteMovieToUser } = useContext(UserContext);

  const imgStyles = {
    height: '260px',
    objectFit: 'cover',
  };

  const isFavorite = user?.favoriteMovies?.includes(movie.id);

  return (
    <div className="card">
      <img
        src={movie.imageUrl}
        className="card-img-top"
        style={imgStyles}
        alt={movie.title}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>
        {user?.id && (
          <button
            className={`btn ${
              isFavorite ? 'btn-success' : 'btn-outline-primary'
            }`}
            onClick={() => toggleFavoriteMovieToUser(movie.id)}
          >
            Favorite
          </button>
        )}
      </div>
    </div>
  );
}
