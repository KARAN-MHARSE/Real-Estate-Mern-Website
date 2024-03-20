const express = require('express')
const router = express.Router()
const {createListing,getListingById,getAllListings} = require('../controllers/listing.controller')
const {upload} = require('../middlewares/upload.middleware')



router.route('/create').post(
    upload.single('imageUrl'),
    createListing
)
router.route('/listingbyid/:userRef').get(getListingById)
router.route('/allListings').get(getAllListings)
// console.log(formData.imgeUrl[0])


module.exports = router