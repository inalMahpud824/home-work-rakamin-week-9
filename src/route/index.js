const router = require('express').Router()
const {movieControllers} = require('../controller')

router.get('/movies', movieControllers.getAllMovie)

module.exports = router