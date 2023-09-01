const express = require('express'),
router = express.Router();


const pageController = require('../controllers/pageController')

router.get("/",pageController.getIndexPage);

router.get("/about",pageController.getAboutPage);

router.get("/contact",pageController.getContactPage);

router.get("/resume",pageController.getResumePage);



module.exports = router;