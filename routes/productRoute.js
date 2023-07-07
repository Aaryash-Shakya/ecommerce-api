const express = require('express')
const { postProduct, showProduct, productDetails, deleteProduct, updateProduct } = require('../controllers/productController')
const router = express.Router()
const upload = require('../middleware/fileUpload')
const { productValidation, validation } = require('../validation/validator')

router.post('/postproduct',upload.single('productImage'),productValidation,validation,postProduct)
router.get('/showproduct',showProduct)
router.get('/productdetails/:pid',productDetails)
router.delete('/deleteproduct/:pid',deleteProduct)
router.put('/updateproduct/:pid',upload.single('productImage'),productValidation,validation,updateProduct)


module.exports=router