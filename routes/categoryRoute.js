const express = require('express')
const { postCategory, allCategory, categoryDetails, deleteCategory, updateCategory } = require('../controllers/categoryController')
const router = express.Router()

router.post('/postcategory',postCategory)
router.get('/allcategory',allCategory)
router.get('/categorydetails/:id',categoryDetails)
router.delete('/deletecategory/:id',deleteCategory)
router.put('/updatecategory/:id',updateCategory)

module.exports=router