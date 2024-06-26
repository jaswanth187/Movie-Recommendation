import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Confetti from "react-confetti";

const Results = () => {
  const location = useLocation();
  const { formData, movies, genres } = location.state || {};
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;
  const [showConfetti, setShowConfetti] = useState(true);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNextPage = () => {
    if (indexOfLastMovie < movies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#FEFDF6] p-8 overflow-y-auto">
      {showConfetti && <Confetti recycle={false} />}
      <h2 className="text-3xl font-extrabold text-[#1E1C39] mb-4">
        Recommended Movies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
        {currentPage > 1 && (
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
            onClick={handlePrevPage}
          >
            Previous
          </button>
        )}
        {indexOfLastMovie < movies.length && (
          <button
            className="bg-[#1E1C39] text-[#FEFDF6] py-2 px-4 rounded-md"
            onClick={handleNextPage}
          >
            Want More
          </button>
        )}
        <Link to="/" className="bg-gray-500 text-white py-2 px-4 rounded-md">
          Home
        </Link>
      </div>
    </div>
  );
};

// PropTypes validation
Results.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      formData: PropTypes.shape({
        mood: PropTypes.string,
        occasion: PropTypes.string,
        genre: PropTypes.string,
      }),
      movies: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          vote_average: PropTypes.number,
          poster_path: PropTypes.string,
          genre_ids: PropTypes.arrayOf(PropTypes.number),
        })
      ),
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
    }),
  }),
};

export default Results;
