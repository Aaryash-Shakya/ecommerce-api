const User = require('../models/userModel')

// to post user
exports.postUser = async (req,res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    user = await user.save()
    if(!user){
        return res.status(400).json({error: 'something went wrong while creating your account'})
    }
    res.send(user)
}