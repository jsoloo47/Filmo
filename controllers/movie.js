const Movie = require('../models/Api/Movie');
const Watchlist = require('../models/Watchlist');

module.exports = {
  renderMovie: async (req,res)=>{
    // getJSON returns movie data in an array
    const movieInfoArr = await Movie.getJSON();
    try{
        const watchlist = await Watchlist.find({userId:req.user.id})
        const moviesLeft = await Watchlist.countDocuments({userId:req.user.id,watched: false})  
          res.render('watchlist', {
            movieTitle: movieInfoArr[0],
            movieDesc: movieInfoArr[1],
            posterPath: movieInfoArr[2],
            user: req.user,
            watchlist: watchlist,
            left: moviesLeft, 
            title: "Watchlist"
          })
      }catch(err){
          console.log(err)
      }
  },
  createList: async (req, res)=>{
      try{
          await Watchlist.create({movieTitle: req.body.movieTitle, watched: false, userId: req.user.id})
          console.log('Movie has been added!')
          res.redirect('/watchlist')
      }catch(err){
          console.log(err)
      }
  },
  markComplete: async (req, res)=>{
      try{
          await Watchlist.findOneAndUpdate({_id:req.body.movieTitleIdFromJSFile},{
              watched: true
          })
          console.log('Marked Watched!')
          res.json('Watched!')
      }catch(err){
          console.log(err)
      }
  },
  markIncomplete: async (req, res)=>{
      try{
          await Watchlist.findOneAndUpdate({_id:req.body.movieTitleIdFromJSFile},{
              watched: false
          })
          console.log('Marked Incomplete')
          res.json('Marked Incomplete')
      }catch(err){
          console.log(err)
      }
  },
  deleteMovie: async (req, res)=>{
      console.log(req.body.movieTitleIdFromJSFile)
      try{
          await Watchlist.findOneAndDelete({_id:req.body.movieTitleIdFromJSFile})
          console.log('Deleted Movie')
          res.json('Deleted Movie')
      }catch(err){
          console.log(err)
      }
  }
}