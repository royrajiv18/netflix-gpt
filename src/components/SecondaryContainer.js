import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      {/*
        Movie list - Popular
            - movie card  *n
        Movie list - Now Playing
        Movie list - Trending
        Movie list - Horror

    */}
    </div>
  );
};

export default SecondaryContainer;
