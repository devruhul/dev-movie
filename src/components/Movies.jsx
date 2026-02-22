import { useState } from "react";
import Movie from "./Movie";
import "../App.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovie = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchTerm}`,
      );

      const data = await res.json();

      if (data.Response === "True") {
          const uniqueMovies = data.Search.filter(
            (movie, index, self) =>
              index === self.findIndex((m) => m.imdbID === movie.imdbID),
          );
          setMovies(uniqueMovies);
      } else {
        setMovies([]);
        setError(data.Error);
      }

      setSearchTerm("");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    // after the movie is searched, clear the input field
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    // clear movies when input is empty
    if (searchTerm === "") {
      setMovies([]);
    }

  };;

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <input
          style={{
            margin: "15px",
          }}
          onChange={handleInput}
          value={searchTerm}
          type="text"
          placeholder="Search your movie..."
        />
        <button onClick={searchMovie}>Search Movies</button>
        {movies?.length === 0 && <h2>Please search for a movie</h2>}
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movie-card-container">
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.imdbID}></Movie>
          ))}
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}
