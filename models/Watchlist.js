const mongoose = require('mongoose')

const WatchlistSchema = new mongoose.Schema({
  movieTitle: {
    type: String,
    required: true,
  },
  watched: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Watchlist', WatchlistSchema)