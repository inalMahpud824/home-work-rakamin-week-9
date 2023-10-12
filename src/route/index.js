const authRoutes = require('./auth.routes')
const movieRoutes = require('./movie.routes')

const router = require('express').Router()

router.use('/movies', movieRoutes)
router.use('/auth', authRoutes)
module.exports = router