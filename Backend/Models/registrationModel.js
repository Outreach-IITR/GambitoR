const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    name: {
        type: String, default: 'Name',
        required: [true, "Please enter name"]
    },
    
    age: {
        type: Number, index: true
    },
    
    contactNumber: {
        type:Number,
        required: [true, "Please provide your mobile Number"],
        unique: [true, "This number is already registered"], },
    
    emailId: {
        type:String,
        required: [true, "Please enter email address."]
    },
    
    class: {
        type:Number,
        required:[true, "Please enter your class."]
    },
    
    parentName: {
        type: String,
        default: 'Parent\'s Name',
        required: [true, "Please enter parent\'s name"]
    },
    
    parentContactNumber: {
        type:Number
    },
    
    parentEmailId: {
        type:String, required: [true, "Please enter email address."]
    },
    
    schoolName: {
        type: String, default: 'School Name'
    },
    
    address: {
        type: String, default: 'Address'
    },
    
    pinCode: {
        type:Number
    },
    
    schoolContactNumber: {
        type:Number
    },
    
    schoolEmailId: {
        type:String,
        required: [true, "Please enter email address."]
    },
  });

  const registrationModel = mongoose.model('Registration', registrationSchema);

  module.exports = registrationModel;