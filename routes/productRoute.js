const express = require('express')
const { postProduct, showProduct, productDetails, deleteProduct } = require('../controllers/productController')
const router = express.Router()

router.post('/postproduct',postProduct)
router.get('/showproduct',showProduct)
router.get('/productdetails/:pid',productDetails)
router.delete('/deleteproduct/:pid',deleteProduct)


module.exports=router