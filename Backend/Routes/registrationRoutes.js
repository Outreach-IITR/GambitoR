const express = require('express');
const { createRegistration, getAllRegistrations } = require('../Controller/registrationController');
const uploadStorage = require('../utils/upload');
const router = express.Router();

router.route('/').post(uploadStorage.single("marksheet"), createRegistration).get(getAllRegistrations);

module.exports = router;
