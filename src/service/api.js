// const axios = require('axios').default;
const API_KEY = '4c205a55573f45aaf55bacec768fd5ae';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingToday = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const movies = await response.json();

  return movies.results;
};

export const fetchMovieById = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  const movies = await response.json();

  return movies;
};

export const fetchMovieByQuery = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const movies = await response.json();
  //   console.log(movies);
  return movies;
};

export const fetchMovieCreditsById = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const movies = await response.json();
  //   console.log(movies);
  return movies;
};

export const fetchMovieReviewsById = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const movies = await response.json();
  // console.log(movies);
  return movies;
};
