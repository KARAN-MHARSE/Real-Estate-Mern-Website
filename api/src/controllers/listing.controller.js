const Listing = require('../models/listing.model')
const {ApiError} = require('../utils/ApiError')
const {asyncHandler} = require('../utils/asyncHandler')

const createListing = asyncHandler(async(req,res)=>{
    const listing = await Listing.create(req.body);
    res
    .status(201)
    .json({
        success:true,
        listing,
        error:false
    })
})


module.exports = {createListing}