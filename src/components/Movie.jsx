import React from 'react'
import "../App.css";

export default function Movie({ movie }) {
  return (
    <>
    <div className='movie-card'>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p> 
        <img src={movie.Poster} alt={movie.Title} />
    </div>
    </>
    
  )
}
