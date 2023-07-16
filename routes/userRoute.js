const express = require('express')
const { postUser, postEmailConfiguration, signIn, forgetPassword, resetPassword, userList, userDetails, signOut, requireAdmin, requireUser } = require('../controllers/userController')
const router = express.Router()
const { userValidation, passwordValidation, validation } = require('../validation/validator')

router.post('/register', userValidation, validation, postUser)
router.put('/confirmation/:token', postEmailConfiguration)
router.post('/signin', signIn)
router.post('/forgetpassword', forgetPassword)
router.put('/resetpassword/:token', resetPassword)
router.get('/userlist', requireAdmin, userList)
router.get('/userdetails/:uid',requireUser, userDetails)
router.post('/signout', signOut)

module.exports = router