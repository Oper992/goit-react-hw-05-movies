import { MoviesList } from '..//../components/MoviesList/MoviesList';

const Home = ({ trendingMovies }) => {
  return (
    <>
      <h1>Trending today</h1>;
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
