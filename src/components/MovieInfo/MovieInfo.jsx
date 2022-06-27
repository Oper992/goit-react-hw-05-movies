import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../service/api';
import styled from './MovieInfo.module.css';

export const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const { id } = useParams();

  useEffect(() => {
    const addMovie = async () => {
      try {
        const response = await fetchMovieById(id);

        setMovie(response);
        setStatus('resolve');
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    addMovie();
  }, [id]);

  const userScore = () => {
    return Math.trunc(movie.vote_average * 10);
  };

  const { poster_path, title, name, overview, genres } = movie;

  return (
    <>
      {status === 'resolve' && (
        <div className={styled.movieInfo}>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt=""
          />

          <div>
            <h1>{title ? title : name}</h1>
            <p>User score: {`${userScore()}%`}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <div className={styled.genres}>
              {genres.map(({ id, name }) => (
                <p key={id}>{name}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
