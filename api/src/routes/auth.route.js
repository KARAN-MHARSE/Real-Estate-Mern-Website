const express = require('express')
const router = express.Router()
const {signUp,signIn,logout,createProfile} = require('../controllers/auth.controller')
const {verifyUser} = require('../middlewares/verifyUser')

router.route('/signUp').post(signUp)
router.route('/signIn').post(signIn)

router.route('/logOut').post(verifyUser,logout)
router.route('/profile').post(verifyUser,createProfile)
// verifyuser


module.exports = router