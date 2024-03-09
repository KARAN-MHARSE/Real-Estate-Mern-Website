const User = require('../models/user.model')
const {asyncHandler} = require('../utils/asyncHandler')
const {ApiError} = require('../utils/ApiError')

const signUp = asyncHandler(async(req,res)=>{
    const {fullName,userName,email,password} = req.body;

    if([fullName,userName,email,password].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"All fields are required")
    }
    const existedUser = await User.findOne({
        $or: [{userName},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"user already exist")
    }

    const user = await User.create({
        fullName,
        userName,
        email,
        password
    })

    res.status(201).json({
        success:true,
        user,
        error:false
    })
})

const signIn = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        throw new ApiError(404,"Credentials required")
    }

    const user = await User.findOne({email})
    if(!user){
        throw new ApiError(404,"email does not exit")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)
    // console.log(isPasswordCorrect)
    if(!isPasswordCorrect){
        throw new ApiError(401,"Wrong password")
    }

    const accesskey = await user.generateAccessToken()

    const options = {
        httpOnly:true,
        secure:true
    }

    res
    .status(200)
    .cookie('acessToken',accesskey,options)
    .json({
        success:true,
        user,
        error:false
    })
})

module.exports = {signUp,signIn}