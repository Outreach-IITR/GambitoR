const ResultModel = require("../Models/resultModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");


// exports.createResult = catchAsync(async (req, res, next) => {
//   const existingEmailRegistration = await RegistrationModel.findOne({ email: req.body.email });
//   if (existingEmailRegistration) {
//     return next(new AppError("This email is already registered.", 400));
//   }
  
//   await ResultModel.create({
//     ...req.body,
//   });

//   res.status(201).json({
//     status: "success",
//     data: "Registration Completed Successfully!"
//   });

// });