const User = require('../models/userModel')
const Token = require('../models/tokenModel')
const crypto = require('crypto')
const sendEmail = require('../utils/setEmail')
const jwt = require('jsonwebtoken')

// to post user
exports.postUser = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    // check if email is already registered
    User.findOne({ email: user.email })
        .then(async data => {
            if (data) {
                return res.status(400).json({ error: 'email is already registered' })
            }
            else {
                user = await user.save()
                if (!user) {
                    return res.status(400).json({ error: 'something went wrong while creating your account' })
                }
                // send token to database
                let token = new Token({
                    token: crypto.randomBytes(16).toString('hex'),
                    userId: user._id,
                })
                token = await token.save()
                if (!token) {
                    return res.status(400).json({ error: 'failed to create token' })
                }

                // send email
                sendEmail({
                    from: 'no-reply@ecommercestore.com',
                    to: user.email,
                    subject: 'Email Verification',
                    text: `Hello\nPlease verify your email by clicking the link below\n\nhttp://${req.headers.host}/api/confirmation/${token.token}`,
                    html: `<a href="http://${req.headers.host}/api/confirmation/${token.token}">Click to Verify</a>`
                })
                res.send(user)
            }
        })
        .catch(err => {
            return res.status(400).json({ error: err })
        })
}

// email confirmation
exports.postEmailConfiguration = (req, res) => {
    // at first find the valid or matching token
    Token.findOne({ token: req.params.token })
        .then(token => {
            if (!token) {
                return res.status(400).json({ error: 'Invalid token or Token may have expired' })
            }
            // if we found the valid token then find the valid user for that token
            User.findOne({ _id: token.userId })
                .then(user => {
                    if (!user) {
                        return res.status(403).json({ error: 'We are unable to find a valid user for this token' })
                    }
                    // check if the user is already verified or not
                    if (user.isVerified) {
                        return res.status(400).json({ error: 'Email is already verified. Login to continue' })
                    }
                    // save the verified user
                    user.isVerified = true
                    user.save()
                        .then(user => {
                            if (!user) {
                                return res.status(400).json({ error: 'Failed to verify your email' })
                            }
                            else {
                                res.json({ msg: 'Your email has been verified' })
                            }
                        })
                        .catch(err => {
                            return res.status(400).json({ error: err })
                        })
                })
                .catch(err => {
                    return res.status(400).json({ error: err })
                })
        })
        .catch(err => {F
            return res.status(400).json({ error: err })
        })
}

// login process
exports.signIn = async (req, res) => {
    // destructuring userSelect: 
    const { email, password } = req.body

    // at first check if email is registered in the database or not
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(403).json({ error: 'Sorry the email you provided has not been registered' })
    }
    // if email is found check the matching password for the email
    if (!user.authenticate(password)) {
        return res.status(400).json({ error: "Email and Password doesn't match" })
    }
    // check if user is verified
    if (!user.isVerified) {
        return res.status(400).json({ error: 'Please verify your email being logging in' })
    }
    // now generate token using user id and jwt secret
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
    // store token in the cookie
    res.cookie('myCookie',token,{expire:Date.now()+999999})
    // return user information to frontend
    const {_id,name,role} = user
    return res.json({token,user:{_id,name,email,role}})

}