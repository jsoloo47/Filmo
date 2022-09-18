require('dotenv').config({path: './config/.env'})
const KEY = process.env.API_KEY;
const axios = require('axios');

module.exports = {
  getJSON: async () =>{
    const randomPage = Math.floor(Math.random() * 10 + 1);
    const randomTitle = Math.floor(Math.random() * 20);
    const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=${randomPage}`);
      const movie = await response.data.results[randomTitle];
      const title = movie.title;
      const desc = movie.overview;
      const posterPath = IMG_PATH + movie.poster_path;
      return [title, desc, posterPath]
    }catch(err){
      console.log(err);
    }
  }
}
