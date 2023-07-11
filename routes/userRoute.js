const express = require('express')
const { postUser, postEmailConfiguration, signIn } = require('../controllers/userController')
const router = express.Router()

router.post('/register', postUser)
router.put('/confirmation/:token', postEmailConfiguration)
router.post('/signin', signIn)

module.exports = router