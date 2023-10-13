const router = require('express').Router()
const {movieControllers} = require('../controller')
const { authMiddlewares } = require('../middleware')

router.get('/',authMiddlewares, movieControllers.getAllMovie)
router.get('/:id',authMiddlewares, movieControllers.getMovieById)
router.post('/', authMiddlewares, movieControllers.createMovie)
router.delete('/:id', authMiddlewares, movieControllers.deleteMovieById)
router.put('/:id', authMiddlewares, movieControllers.updateMoviesById)

module.exports = router