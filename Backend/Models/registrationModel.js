const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Name",
    required: [true, "Please enter name"],
  },
  age: {
    type: Number,
    index: true,
    required: [true, "Please Provide age."],
  },
  contactNumber: {
    type: Number,
    required: [true, "Please provide your mobile Number"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "The value of path {PATH} ({VALUE}) is not a valid email id.",
    ],
    unique: [true, "This number is already registered"],
  },

  email: {
    type: String,
    required: [true, "Please enter email address."],
  },

  class: {
    type: Number,
    required: [true, "Please enter your class."],
  },

  parentName: {
    type: String,
    default: "Parent's Name",
    required: [true, "Please enter parent's name"],
  },

  parentContactNumber: {
    type: Number,
    required: [true, "Please provide your parent's mobile Number"],
  },

  parentEmailId: {
    type: String,
    required: [true, "Please enter email address."],
  },

  schoolName: {
    type: String,
    default: "School Name",
    required: [true],
  },

  address: {
    type: String,
    default: "Address",
    required: [true],
  },

  pinCode: {
    type: Number,
    required: [true],
  },

  schoolContactNumber: {
    type: Number,
    required: [true, "Please provide your school's mobile Number"],
  },

  schoolEmailId: {
    type: String,
    required: [true, "Please enter email address."],
  },
  mailVerified: {
    type: Boolean,
    default: false,
    select: false,
  },
});

const RegistrationModel = mongoose.model("Registration", registrationSchema);

module.exports = RegistrationModel;
