const express = require('express')
const { postCategory, allCategory, categoryDetails, deleteCategory } = require('../controllers/categoryController')
const router = express.Router()

router.post('/postcategory',postCategory)
router.get('/allcategory',allCategory)
router.get('/categorydetails/:id',categoryDetails)
router.delete('/deletecategory',deleteCategory)

module.exports=router