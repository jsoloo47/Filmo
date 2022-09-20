const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, movieController.renderMovie)

router.post('/createList', movieController.createList)

router.put('/markComplete', movieController.markComplete)

router.put('/markIncomplete', movieController.markIncomplete)

router.delete('/deleteMovie', movieController.deleteMovie)

module.exports = router