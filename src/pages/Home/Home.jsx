import { Link } from 'react-router-dom';

export const Home = ({ trendingMovies }) => {
  return (
    <>
      <h1>Trending today</h1>{' '}
      <ul>
        {trendingMovies.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title ? title : name}</Link>
          </li>
        ))}
      </ul>
      ;
    </>
  );
};
