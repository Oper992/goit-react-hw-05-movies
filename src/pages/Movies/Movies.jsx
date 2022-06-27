import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from '..//../service/api';
import { MoviesList } from '..//../components/MoviesList/MoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    // console.log(e.target[0].value);
    setQuery(e.target[0].value);
  };

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query)
        .then(movies => setMoviesByQuery(movies.results))
        .catch(error => console.log(error.message));
    }
  }, [query]);

  return (
    <>
      {moviesByQuery.length ? (
        <MoviesList movies={moviesByQuery} />
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="паляниця..."
          ></input>
          <button type="submit">Search</button>
        </form>
      )}
    </>
  );
};
