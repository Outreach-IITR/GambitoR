const express = require('express');
const { createRegistration } = require('../Controller/registrationController');
const uploadStorage = require('../utils/upload');
const router = express.Router();

router.route('/').post(uploadStorage.single("marksheet"), createRegistration);

module.exports = router;
