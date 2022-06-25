import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from '../pages/Home';
import { fetchTrendingToday } from '../service/api';

export const App = () => {
  const trendingMoviesList = async () => {
    const trendingMovies = await fetchTrendingToday();

    console.log(trendingMovies.data.results);
    return trendingMovies.data.results;
  };

  trendingMoviesList();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element="" />
      </Routes>
    </>
  );
};
