import React from 'react'
import "../App.css";

export default function Movie({ movie }) {
  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";
  return (
    <>
    <div className='movie-card'>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p> 
        <img src={poster} alt={movie.Title} />
    </div>
    </>
    
  )
}
