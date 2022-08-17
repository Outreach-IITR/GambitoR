const express = require('express');
const { createRegistration } = require('../Controller/registrationController');
const router = express.Router();

router.route('/').post(createRegistration);

module.exports = router;