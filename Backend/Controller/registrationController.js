const RegistrationModel = require("../Models/registrationModel");
const catchAsync = require("../utils/catchAsync");

exports.createRegistration = catchAsync(async (req, res, next) => {
  await RegistrationModel.create({
    ...req.body
  });

  res.status(201).json({
    status: "success",
    message: "Registration Completed Successfully!"
  })
})