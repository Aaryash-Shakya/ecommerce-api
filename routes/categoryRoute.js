const express = require('express')
const { postCategory } = require('../controllers/categoryController')
const router = express.Router()

router.post('/postcategory',postCategory)

module.exports=router