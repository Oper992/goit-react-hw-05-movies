import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

// const createAsyncComponent = path =>{ return lazy(() => import(path))}; не работает...
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieInfo = lazy(() => import('./pages/MovieInfo/MovieInfo'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Route>
          <Route path="*" element={<h2>Неверный адрес, разбейте пожалуйста монитор и попробуйте еще раз...</h2>} />
        </Route>
      </Routes>
    </>
  );
};
