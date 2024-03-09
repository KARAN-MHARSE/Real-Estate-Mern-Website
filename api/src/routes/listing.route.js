const express = require('express')
const router = express.Router()
const {createListing} = require('../controllers/listing.controller')
const {upload} = require('../middlewares/upload.middleware')


router.route('/create').post(
    upload.single('imageUrl'),
    createListing
)

module.exports = router