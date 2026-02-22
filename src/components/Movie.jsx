import React from 'react'
import "../App.css";

export default function Movie({ movie }) {
  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://placehold.co/300x400?text=No+Image+Available&font=roboto&bg=cccccc";
  return (
    <>
    <div className='movie-card'>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p> 
        <p>{movie.Type}</p>
        <img src={poster} alt={movie.Title} />
    </div>
    </>
    
  )
}
