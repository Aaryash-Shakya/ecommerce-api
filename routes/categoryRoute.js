const express = require('express')
const { postCategory, allCategory, categoryDetails, deleteCategory, updateCategory } = require('../controllers/categoryController')
const router = express.Router()
const {categoryValidation, validation} = require('../validation/validator')

router.post('/postcategory',categoryValidation,validation,postCategory)
router.get('/allcategory',allCategory)
router.get('/categorydetails/:id',categoryDetails)
router.delete('/deletecategory/:id',deleteCategory)
router.put('/updatecategory/:id',categoryValidation,validation,updateCategory)

module.exports=router