import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"; // Assuming you have a CSS file for styles

const apiKey = "b9998564ed66f41987404cb146c0376a";

const App = () => {
  const [mood, setMood] = useState("");
  const [companion, setCompanion] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres", error);
      }
    };
    fetchGenres();
  }, []);

  const handleFetchMovies = async () => {
    const moodGenres = {
      happy: [35],
      sad: [18],
      normal: [28, 12, 16],
    };

    const companionFilter = {
      alone: {},
      family: { certification_country: "US", certification: "PG" },
      partner: { with_genres: [35, 10749] },
      date: { with_genres: [10749] },
    };

    const genreId = genres.find(
      (g) => g.name.toLowerCase() === genre.toLowerCase()
    )?.id;
    let filters = { ...companionFilter[companion], with_genres: genreId };

    if (mood === "normal") {
      filters.with_genres = [genreId, ...moodGenres["normal"]];
    } else {
      filters.with_genres = [...moodGenres[mood], genreId];
    }

    const queryString = Object.entries(filters)
      .map(([key, value]) => {
        return `${key}=${Array.isArray(value) ? value.join(",") : value}`;
      })
      .join("&");

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&${queryString}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genres.find((g) => g.id === id)?.name)
      .filter((name) => name)
      .join(", ");
  };

  return (
    <div className="app-container">
      <h1>Movie Recommendation</h1>
      <div className="selector-container">
        <label>Mood: </label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Select Mood</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="normal">Normal</option>
        </select>
      </div>
      <div className="selector-container">
        <label>Watching With: </label>
        <select
          value={companion}
          onChange={(e) => setCompanion(e.target.value)}
        >
          <option value="">Select Companion</option>
          <option value="alone">Alone</option>
          <option value="family">Family</option>
          <option value="partner">Partner</option>
          <option value="date">Date</option>
        </select>
      </div>
      <div className="selector-container">
        <label>Genre: </label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Select Genre</option>
          {genres.map((g) => (
            <option key={g.id} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>
      </div>
      <button className="fetch-button" onClick={handleFetchMovies}>
        Get Recommendations
      </button>
      <div className="movies-container">
        <h2>Recommended Movies</h2>
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
              <p>Genres: {getGenreNames(movie.genre_ids)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
