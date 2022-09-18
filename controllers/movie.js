const Movie = require('../models/Api/Movie');

module.exports = {
    renderMovie: async (req,res)=>{
      // getJSON returns movie data in an array
      const movieInfoArr = await Movie.getJSON();
      console.log(movieInfoArr);
      try{
            res.render('movie', {
              movieTitle: movieInfoArr[0],
              movieDesc: movieInfoArr[1],
              posterPath: movieInfoArr[2],
              user: req.user,
              title: "Test"
            })
        }catch(err){
            console.log(err)
        }
    },
}