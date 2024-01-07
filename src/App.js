import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import { movieData } from "./data";

import Filter from "./components/filter";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  return (
    <div>
      <Filter
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <MovieList
        movies={movies}
        setMovies={setMovies}
        filterTitle={filterTitle}
        filterRating={filterRating}
      />
    </div>
  );
}

export default App;
