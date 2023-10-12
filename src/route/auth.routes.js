const router = require('express').Router()
const {authControllers} = require('../controller')
router.post('/register', authControllers.register)

module.exports = router