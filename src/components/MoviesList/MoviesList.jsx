import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, name, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title ? title : name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
