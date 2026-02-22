import { useState } from "react";
import Movie from "./Movie";
import "../App.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${searchTerm}`,
    );
    const data = await res.json();
    setMovies(data.Search);
  };

  const handleInput = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  return (
    <div>
        <div style={{margin: "10px"}}>
           <input
           style={{
            margin: "15px"
           }}
        onChange={handleInput}
        type="text"
        placeholder="Search your movie..."
      />
      <button onClick={searchMovie}>Search Movies</button>
      {movies.length === 0 && <h2>Please search for a movie</h2>} 
        </div>
      
      <div className="movie-card-container">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID}></Movie>
        ))}
      </div>
    </div>
  );
}
