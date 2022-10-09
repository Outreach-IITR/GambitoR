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
    text: `Hello ${req.body.name}, \n
    Team GambitoR is delighted to inform you that you have successfully registered for the first edition of GambitoR! \n
    \n    
    These are the credentials you have entered. \n
    Email: ${req.body.email} \n
    Mobile Number: ${req.body.contactNumber} \n
    \n
    The first round of GambitoR will be on 9th October 2022. \n
    \n
    Follow us on our social media handles to stay connected! \n
    Further updates will be sent to your registered email address. \n
    \n
    With regards, \n
    Team GambitoR.
    `,
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

exports.bulkMail = catchAsync(async (req, res, next) => {
  const data = await RegistrationModel.find().select("email");
  let emails = [];
  data.map((d, idx) => emails.push(d.email));
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: emails,
    subject: "Regarding Gambitor 1st Round.",
    text: `Dear Applicant
Greetings of the day!

On account of multiple requests received from schools and students all over the country, we have decided to postpone Gambitor-  A national-level school championship for students of classes IX-XII until further notice.

Clarification regarding syllabus:
Class IX-X (Metiox): Aptitude and Logical Reasoning
Class- XII (Apollox): Aptitude, Logical Reasoning, and General Mathematics
Class XII (Athenox): Aptitude, Logical Reasoning, Maths, Physics, Chemistry.

Tentative exam dates: January

Please note that the first round will be entirely online, details of which will be informed through your email.
For more information, visit: http://gambitor.iitr.ac.in/ and follow us on our social media handles to stay updated. In case of any query, feel free to reach us at the same.

Thanks and Regards
Outreach Cell
IIT Roorkee
    `,
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
  res.status(200).json({
    status: "success",
    data: {
      message: "Mail sent successfully."
    }
  });
});
