const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    regularPrice:{
        type:Number,
        required:true
    },
    discountPrice:{
        type:Number,
        required:true
    },
    bathRoom:{
        type:Number,
        required:true
    },
    bedRoom:{
        type:Number,
        required:true
    },
    furnished:{
        type:Boolean,
        required:true
    },
    parking:{
        type:Boolean,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    offer:{
        type:Boolean,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    userRef:{
        type:String,
        required:true
    },

},{
    timestamps:true
})

module.exports = mongoose.model('Listing',listingSchema)