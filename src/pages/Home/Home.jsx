import { useState, useEffect } from 'react';
import { MoviesList } from '..//../components/MoviesList/MoviesList';
import { fetchTrendingToday } from '..//../service/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const addTrendingMovies = async () => {
      const response = await fetchTrendingToday();

      setTrendingMovies(response);
      // console.log(response);
    };
    addTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>;
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
