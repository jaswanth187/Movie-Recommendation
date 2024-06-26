import PropTypes from "prop-types";
import "./MovieCard.css";

const MovieCard = ({ movie, genres }) => {
  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((g) => g.id === id)?.name)
      .filter((name) => name)
      .join(", ");
  };

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
          alt={movie.title}
          className="card-image-img"
        />
      </div>
      <div className="category">Genres: {getGenreNames(movie.genre_ids)}</div>
      <div className="heading">
        <h3>{movie.title}</h3>
        <div className="author">
          Rating: <span className="name">{movie.vote_average} </span>/10
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    poster_path: PropTypes.string, // Ensure this is defined for the image source
  }).isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieCard;
