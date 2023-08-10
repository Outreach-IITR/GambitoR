const express = require('express');
const { protect } = require('../Controller/authController');
const { createRegistration, getAllRegistrations, sendVerificationMail, verifyEmail, bulkMail } = require('../Controller/registrationController');
const uploadStorage = require('../utils/upload');
const router = express.Router();

router.route('/').post(createRegistration).get(protect, getAllRegistrations);
// router.route('/verifyEmail').post(sendVerificationMail);
// router.route("/verifyEmail/:id").get(verifyEmail);
router.route('/bulkmail').get(bulkMail);

module.exports = router;
