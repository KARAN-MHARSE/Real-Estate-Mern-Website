const {ApiError} = require('../utils/ApiError')
const {asyncHandler} = require('../utils/asyncHandler')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const verifyUser = asyncHandler(async(req,res)=>{
    try {
        const token = req.cookies?.acessToken || req.header('Authorization')?.replace('Bearer',"")

        console.log(token)
        next()
    } catch (error) {
        
    }
})

module.exports = {verifyUser}