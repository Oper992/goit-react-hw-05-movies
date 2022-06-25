import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from './Header/Header';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Home/Movies/Movies';
import { fetchTrendingToday } from '../service/api';

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
      <Header />
      <Routes>
        <Route path="/" element={<Home trendingMovies={trendingMovies} />} />
        <Route path="/movies/:id" element={<Movies />}></Route>
        <Route path="*" element="" />
      </Routes>
    </>
  );
};
