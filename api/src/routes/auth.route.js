const express = require('express')
const router = express.Router()
const {signUp,signIn} = require('../controllers/auth.controller')
// const {verifyUser} = require('../middlewares/verifyUser')

router.route('/signUp').post(signUp)
router.route('/signIn').post(signIn)
// verifyuser


module.exports = router