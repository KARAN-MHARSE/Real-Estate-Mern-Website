const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    userName:{
        type:String,
        required:true,
        lowercase:true,
        // unique:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        // unique:true,
        trim:true
    },
    avatar:{
        type:String,
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type:String
    }
},
{
    timestamps:true
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = async function(){
    return await jwt.sign(
        {
            _id:this._id
        },
        process.env.ACCESS_SECRET_KEY,
        {
            expiresIn:process.env.ACCESS_EXPIRY_DATE
        }
    )
}

module.exports = mongoose.model("User",userSchema)