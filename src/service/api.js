// const axios = require('axios').default;
const API_KEY = '4c205a55573f45aaf55bacec768fd5ae';
const BASE_URL = 'api.themoviedb.org/3';

export const fetchTrendingToday = async () => {
  const response = await fetch(
    `https://${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const movies = await response.json();

  return movies.results;
};

export const fetchMovieById = async movieId => {
  const response = await fetch(
    `https://${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  const movies = await response.json();

  return movies;
};
