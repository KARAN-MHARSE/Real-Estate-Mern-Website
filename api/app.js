const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {connect} = require('./src/db/connection')

// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// Routes
const authRoute = require('./src/routes/auth.route')
const listingRoute = require('./src/routes/listing.route')


// Variables
const port = process.env.PORT || 5000



// Route define
app.use('/api/v2/user/auth',authRoute)
app.use('/api/v2/listing',listingRoute)

// Error middleware
app.use((err,req,res,next)=>{
    res
    .json({
        success:false,
        statusCode:err.statusCode,
        message:err.message,
        error:true
    })
})

const start = async() =>{
    await connect()
    .then(
        app.listen(port, console.log(`The server is listening on port ${port}`))
    )
    .catch((err)=>{
        console.log(err)
    })
}
start()
