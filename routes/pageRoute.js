const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');


// routes
router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/gallery").get(pageController.getGalleryPage);
router.route("/trainer").get(pageController.getTrainerPage);
module.exports = router