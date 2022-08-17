const RegistrationModel = require("../Models/registrationModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createRegistration = catchAsync(async (req, res, next) => {
  console.log(req)
  if (!req.file) {
    next(new AppError("Please provide marksheet", 400));
  }

  req.body.marksheet = process.env.URL + "public/" + req.file.filename;

  await RegistrationModel.create({
    ...req.body,
  });

  res.status(201).json({
    status: "success",
    message: "Registration Completed Successfully!",
  });
});
