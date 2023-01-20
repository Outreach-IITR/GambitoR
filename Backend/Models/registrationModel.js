const mongoose = require("mongoose");
var validator = require("validator");

const infoSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Name",
    required: [true, "Please enter name"],
  },
  contactNumber: {
    type: Number,
    match: [
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid e-mail"],
    required: [true, "Please enter email address."],
  },
});

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Name",
    required: [true, "Please enter name"],
  },
  contactNumber: {
    type: Number,
    match: [
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid e-mail"],
  },
})

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Name",
    required: [true, "Please enter name"],
  },
  contactNumber: {
    type: Number,
    required: [true, "Please provide your mobile Number"],
    match: [
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
  },

  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid e-mail"],
    required: [true, "Please enter email address."],
    unique: [true, "This email is already registered"],
  },
  class: {
    type: String,
    enum: ["metiox", "apollox", "athenox"],
    required: [true, "Please enter your class."],
  },
  referralCode: {
    type: String,
    enum: ["VIM001", "", "AV01"],
  },
  parent: infoSchema,
  school: schoolSchema,
  marksheet: {
    type: String,
    required: [true, "Please provide marksheet."],
  },
  mailVerified: {
    type: Boolean,
    default: false,
  },
});

const RegistrationModel = mongoose.model("Registration", registrationSchema);

module.exports = RegistrationModel;
