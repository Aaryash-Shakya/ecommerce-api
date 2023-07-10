const User = require('../models/userModel')
const Token = require('../models/tokenModel')
const crypto = require('crypto')
const sendEmail = require('../utils/setEmail')

// to post user
exports.postUser = async (req,res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    // check if email is already registered
    User.findOne({email:user.email})
    .then(async data=>{
        if(data){
            return res.status(400).json({error: 'email is already registered'})
        }
        else{
            user = await user.save()
            if(!user){
                return res.status(400).json({error: 'something went wrong while creating your account'})
            }
            // send token to database
            let token = new Token({
                token:crypto.randomBytes(16).toString('hex'),
                userId: user._id,
            })
            token = await token.save()
            if(!token){
                return res.status(400).json({error: 'failed to create token'})
            }

            // send email
            sendEmail({
                from: 'no-reply@ecommercestore.com',
                to: user.email,
                subject: 'Email Verification',
                text: `Hello\nPlease verify your email by clicking the link below\n\nhttp://${req.headers.host}/api/confirmation/${token.token}`,
                html:`<a href="http://${req.headers.host}/api/confirmation/${token.token}">Click to Verify</a>`
            })
            res.send(user)
        }
    })
    .catch(err=>{
        return res.status(400).json({error: err})
    })
}

// email confirmation
exports.postEmailConfiguration=(req,res)=>{
    
}