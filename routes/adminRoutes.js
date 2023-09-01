const express = require('express'),
router = express.Router();


const pageController = require('../controllers/pageController')


router.get("/signin",pageController.getSigninPage);

router.get("/signup",pageController.getSignupPage);


module.exports = router;