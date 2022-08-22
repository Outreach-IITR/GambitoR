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
    required: [true, "Please provide your mobile Number"],
    match: [
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
    // unique: [true, "This number is already registered"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid e-mail"],
    required: [true, "Please enter email address."],
    // unique: [true, 'Email id already registered.']
  },
});

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Name",
    required: [true, "Please enter name"],
  },
  // age: {
  //   type: Number,
  //   index: true,
  //   required: [true, "Please Provide age."],
  // },
  contactNumber: {
    type: Number,
    required: [true, "Please provide your mobile Number"],
    match: [
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "The value of path {PATH} ({VALUE}) is not a valid mobile number.",
    ],
    unique: [true, "This number is already registered"],
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
  parent: infoSchema,
  school: infoSchema,
  // parentName: {
  //   type: String,
  //   default: "Parent's Name",
  //   required: [true, "Please enter parent's name"],
  // },

  // parentContactNumber: {
  //   type: Number,
  //   required: [true, "Please provide your parent's mobile Number"],
  //   unique: [true, 'Please provide new mobile number.']
  // },

  // parentEmailId: {
  //   type: String,
  //   required: [true, "Please enter email address."],
  //   validate: [validator.isEmail, "Please enter a valid parent e-mail"],
  // },

  // schoolName: {
  //   type: String,
  //   default: "School Name",
  //   required: [true, 'Please provide school name.'],
  // },

  // address: {
  //   type: String,
  //   default: "Address",
  //   required: [true, 'Please provide address.'],
  // },

  // pinCode: {
  //   type: Number,
  //   required: [true, 'Please provide pincode.'],
  // },

  // schoolContactNumber: {
  //   type: Number,
  //   required: [true, "Please provide your school's mobile Number"],
  // },

  // schoolEmailId: {
  //   validate: [validator.isEmail, "Please enter a valid school e-mail"],
  //   type: String,
  //   required: [true, "Please enter email address."],
  // },
  marksheet: {
    type: String,
    required: [true, "Please provide marksheet."],
  },
  mailVerified: {
    type: Boolean,
    default: false,
    select: false,
  },
});

const RegistrationModel = mongoose.model("Registration", registrationSchema);

module.exports = RegistrationModel;
