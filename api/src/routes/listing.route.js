const express = require('express')
const router = express.Router()
const {createListing,getListingById,getAllListings,getListingByListingId} = require('../controllers/listing.controller')
const {upload} = require('../middlewares/upload.middleware')



router.route('/create').post(
    upload.single('imageUrl'),
    createListing
)
router.route('/listingbyuserid/:userRef').get(getListingById)
router.route('/allListings').get(getAllListings)
// console.log(formData.imgeUrl[0])

router.route('/listingById/:listingId').get(getListingByListingId)

module.exports = router