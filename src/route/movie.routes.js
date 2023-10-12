const router = require('express').Router()
const {movieControllers} = require('../controller')

router.get('/', movieControllers.getAllMovie)

module.exports = router