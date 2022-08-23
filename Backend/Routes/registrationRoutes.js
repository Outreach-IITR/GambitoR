const express = require('express');
const { createRegistration, getAllRegistrations, sendVerificationMail, verifyEmail } = require('../Controller/registrationController');
const uploadStorage = require('../utils/upload');
const router = express.Router();

router.route('/').post(uploadStorage.single("marksheet"), createRegistration).get(getAllRegistrations);
router.route('/verifyEmail').post(sendVerificationMail);
router.route("/verifyEmail/:id").get(verifyEmail);

module.exports = router;
