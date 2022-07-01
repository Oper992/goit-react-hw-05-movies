import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCreditsById } from '../../service/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCreditsById(id)
      .then(credits => setCast(credits.cast))
      .catch(error => error.message);
  }, [id]);

  return (
    <ul>
      {cast.map(({ profile_path, original_name, character, id }) => (
        <li key={id}>
          <img
            src={
              profile_path &&
              `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
            }
            alt=""
          />
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast