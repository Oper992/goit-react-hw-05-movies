const axios = require('axios').default;
const API_KEY = '4c205a55573f45aaf55bacec768fd5ae';

export const fetchTrendingToday = async () => {
  return await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
};
