import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./Addmovie";

const MovieList = ({ movies, setMovies, filterTitle, filterRating }) => {
  return (
    <div>
      <div>
        <AddMovie setMovies={setMovies} movies={movies} />
      </div>
      <div className="movielist">
        {movies
          .filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .trim()
                .includes(filterTitle.toLowerCase().trim()) &&
              movie.rating >= filterRating
          )

          .map((movie) => {
            return <MovieCard movie={movie} key={Math.random()} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
