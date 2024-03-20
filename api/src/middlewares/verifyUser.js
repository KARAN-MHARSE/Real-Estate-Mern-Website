const {ApiError} = require('../utils/ApiError')
const {asyncHandler} = require('../utils/asyncHandler')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const verifyUser = asyncHandler(async(req,res,next)=>{
        const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer',"")
        // console.log(token)
        if(!token){
            throw new ApiError(401,"Inavalid token")
        }

        const decodeToken = await jwt.verify(token,process.env.ACCESS_SECRET_KEY)
        // console.log(decodeToken)
        const user = await User.findById(decodeToken?._id).select("-password")
        // console.log(user)
        if(!user){
            throw new ApiError(401,"Invalid access token")
        }
        req.user = user
        
        next()
    
})

module.exports = {verifyUser}