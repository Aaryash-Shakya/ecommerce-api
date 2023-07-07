const { check,validationResult } = require('express-validator')

exports.categoryValidation=[
    check('category_name','category name is required').notEmpty()
    .isLength({min: 3}).withMessage('category must must be longer than 3 characters')
]

exports.productValidation = [
    check('productName','product name is required').notEmpty()
    .isLength({min:3}).withMessage('product name must be longer than 3 characters'),
    check('productPrice','price is required').notEmpty()
    .isNumeric().withMessage('product price must be numeric value'),
    check('countInStock','count in stock is required').notEmpty()
    .isNumeric().withMessage('count in stock must be numeric value'),
    check('category','category is required'),
    check('productDescription','description is required').notEmpty()
    .isLength({min:20}).withMessage('product name must be longer than 20 characters'),
]

exports.validation = (req,res,next) =>{
    const errors = validationResult(req)
    if(errors.isEmpty()){
        next()
    }
    else{
        return res.status(400).json({error: errors.array()[0].msg})
    }
}