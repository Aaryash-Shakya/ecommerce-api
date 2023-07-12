const express = require('express')
const { postUser, postEmailConfiguration, signIn, forgetPassword, resetPassword, userList, userDetails } = require('../controllers/userController')
const router = express.Router()

router.post('/register', postUser)
router.put('/confirmation/:token', postEmailConfiguration)
router.post('/signin', signIn)
router.post('/forgetpassword', forgetPassword)
router.put('/resetpassword/:token', resetPassword)
router.get('/userlist',userList)
router.get('/userdetails/:uid',userDetails)

module.exports = router