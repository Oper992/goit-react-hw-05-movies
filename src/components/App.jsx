import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../pages/Home/Home';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { fetchTrendingToday } from '../service/api';
import { Movies } from '../pages/Movies/Movies';

export const App = () => {
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
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home trendingMovies={trendingMovies} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route path="*" element="" />
        </Route>
      </Routes>
    </>
  );
};
