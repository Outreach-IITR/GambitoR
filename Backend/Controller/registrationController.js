const RegistrationModel = require("../Models/registrationModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const mailService = require("../utils/emailService");

exports.createRegistration = catchAsync(async (req, res, next) => {
  if (!req.file) {
    next(new AppError("Please provide marksheet", 400));
  }

  req.body.marksheet = process.env.URL + "public/" + req.file.filename;

  await RegistrationModel.create({
    ...req.body,
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: req.body.email,
    subject: "Registration Completed successfully.",
    text: "Hey! Your registration is completed successfully.",
  };

  mailService.sendMail(mailOptions, function (err) {
    if (err) {
      next(new AppError(err.message, err.statusCode));
    } else {
      res.status(201).json({
        status: "success",
        data: "Registration Completed Successfully!",
      });
    }
  });
});

exports.getAllRegistrations = catchAsync(async (req, res, next) => {
  const registrations = await RegistrationModel.find();

  res.status(200).json({
    status: "success",
    data: registrations,
  });
});

exports.sendVerificationMail = catchAsync(async (req, res, next) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: req.body.email,
    subject: "Registration Completed successfully.",
    html: `<a href="${process.env.URL}api/v1/registration/verifyEmail/${req.body._id}">Click Here</a>`,
    text: "Hey! Your registration is completed successfully.",
  };

  mailService.sendMail(mailOptions, function (err) {
    if (err) {
      next(new AppError(err.message, err.statusCode));
    } else {
      res.status(200).json({
        status: "success",
        data: "Mail sent successfully.",
      });
    }
  });
});

exports.verifyEmail = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  await RegistrationModel.findOne(
    { _id: id },
    {
      mailVerified: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: "Email verified successfully!",
  });
});
