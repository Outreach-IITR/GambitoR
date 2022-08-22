const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const mailService = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  }
});

module.exports = mailService;
