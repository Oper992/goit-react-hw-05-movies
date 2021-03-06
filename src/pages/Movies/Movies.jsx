import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '..//../service/api';
import { MoviesList } from '..//../components/MoviesList/MoviesList';

const Movies = () => {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    const nextParams = query !== '' ? { name: query } : {};

    setSearchParams(nextParams);
  };

  const onChange = e => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  };

  useEffect(() => {
    searchParams.get('name') && setQuery(searchParams.get('name'));
  }, [searchParams]);

  useEffect(() => {
    // console.log(searchParams.get('name'));
    if (searchParams.get('name')) {
      fetchMovieByQuery(searchParams.get('name'))
        .then(movies => {
          const justTheRightProperties = movies.results.map(
            ({ title, name, id }) => {
              return { title, name, id };
            }
          );

          setMoviesByQuery(justTheRightProperties);
        })
        .catch(error => console.log(error.message));
    }
  }, [searchParams]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="паляниця..."
        ></input>
        <button type="submit">Search</button>
      </form>
      {moviesByQuery.length !== 0 && <MoviesList movies={moviesByQuery} />}
    </>
  );
};

export default Movies;
