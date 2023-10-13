const authRoutes = require('./auth.routes')
const movieRoutes = require('./movie.routes')
const userRoutes = require('./user.routes')
const router = require('express').Router()

router.use('/auth', authRoutes)
router.use('/movies', movieRoutes)
router.use('/users', userRoutes)
module.exports = router