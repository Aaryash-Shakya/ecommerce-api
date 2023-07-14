const express = require('express')
const app = express()
require('dotenv').config()
require('./db/connection')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const testRoute = require('./routes/testRoute')
const categoryRoute = require('./routes/categoryRoute')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')

// app.get('/',(req,res)=>{
//     res.send('Welcome to node js')
// })

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/public/uploads',express.static('public/uploads'))

// routes middleware - check if we can let the req proceed forward or not
app.use('/api',testRoute)
app.use('/api',categoryRoute)
app.use('/api',productRoute)
app.use('/api',userRoute)
app.use('/api',orderRoute)

const port =  process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})