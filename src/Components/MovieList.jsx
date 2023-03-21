import React from 'react';
import Cards from './MovieCard';


function MovieList({ movies }) {
  return (
      <div className="movies">
      {movies.map(movie => (
        <Cards key={movie.id} value={movie.rating} title={movie.title} description={movie.description} image={movie.posterURL} />
      ))}
    </div>
  );
}

export default MovieList;