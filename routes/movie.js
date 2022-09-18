const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, movieController.renderMovie)

module.exports = router