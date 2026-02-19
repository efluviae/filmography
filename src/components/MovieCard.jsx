import { useMovieContext } from "../context/useMovieContext";
import { useState } from "react";
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const hasPoster = Boolean(movie.poster_path);
  const [imgError, setImgError] = useState(!hasPoster);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };
  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        {!imgError && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            onError={() => setImgError(true)}
          />
        )}
        {imgError && (
          <div className="poster-fallback">No image found</div>
        )}
        <div className="movie-card__overlay">
          <button
            className={`favorite-btn favorite-btn--desktop ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ❤
          </button>
        </div>
      </div>
      <div className="movie-card__txt">
        <div className="movie-card__txt__info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
        <button
          className={`favorite-btn favorite-btn--mobile ${favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
        >
          ❤
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
