const router = require('express').Router()
const {userControllers} = require('../controller')
const { authMiddlewares } = require('../middleware')

router.get('/',authMiddlewares, userControllers.getAllUsers)
router.get('/:id',authMiddlewares, userControllers.getUserById)
router.delete('/:id', authMiddlewares, userControllers.deleteUserById)
router.put('/:id', authMiddlewares, userControllers.updateUserById)

module.exports = router