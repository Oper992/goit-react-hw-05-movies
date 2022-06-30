import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { fetchTrendingToday } from '../service/api';

// const createAsyncComponent = path =>{ return lazy(() => import(path))}; не работает...
const Home = lazy(() => import('.././pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
          <Route path="/movies/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Route>
          <Route path="*" element="" />
        </Route>
      </Routes>
    </>
  );
};
