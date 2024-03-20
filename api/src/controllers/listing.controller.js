const Listing = require('../models/listing.model')
const {ApiError} = require('../utils/ApiError')
const {asyncHandler} = require('../utils/asyncHandler')
const {uploadOnCloudinary} = require('../utils/cloudinary')

const createListing = asyncHandler(async(req,res)=>{
    const{name,description,address,regularPrice,discountPrice,bathRoom,bedRoom,furnished,parking,type,offer,userRef} = req.body;
    // const imageUrl = req.file?.path;
    const localImagePath = req.file?.path;

    const cloudinaryRes = await uploadOnCloudinary(localImagePath)
    const cloudinaryImageUrl = cloudinaryRes.url

    const listing = await Listing.create({
        name,
        description,
        address,
        regularPrice,
        discountPrice,
        bathRoom,
        bedRoom,
        furnished,
        parking,
        type,
        offer,
        imageUrl:cloudinaryImageUrl,
        userRef
    });
    res
    .status(201)
    .json({
        success:true,
        listing,
        error:false
    })
   
})

const getListingById = asyncHandler(async(req,res)=>{
    console.log(req.params)
    const {userRef} = req.params

    const listingList = await Listing.find({userRef})

    res.json({listingList})
})

const getAllListings = asyncHandler(async(req,res)=>{
    const listings = await Listing.find({});

    res
    .status(200)
    .json({
        success:true,
        listings,
        error:false
    })
})


module.exports = {createListing,getListingById,getAllListings}