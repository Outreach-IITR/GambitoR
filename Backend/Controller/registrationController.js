const RegistrationModel = require("../Models/registrationModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const mailService = require("../utils/emailService");

const sendInstituteMail = (req, next) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "bilaspur@takshilainstitute.in",
    subject: "Registration Completed successfully.",
    text: `Hello Sir, \n
    Team GambitoR is delighted to inform you that this student have registered for the first edition of GambitoR! \n
    Name: ${req.body.name} \n
    Email: ${req.body.email} \n
    Mobile Number: ${req.body.contactNumber} \n
    School Name: ${req.body["school.name"]} \n
    School Email: ${req.body["school.email"]} \n
    School Contact Number: ${req.body["school.contactNumber"]} \n
    \n
    With regards, \n
    Team GambitoR.
    `,
  };

  mailService.sendMail(mailOptions, function (err) {
    if (err) {
      next(new AppError(err.message, err.statusCode));
    }
  });
};

exports.  createRegistration = catchAsync(async (req, res, next) => {
  const existingEmailRegistration = await RegistrationModel.findOne({ email: req.body.email });
  if (existingEmailRegistration) {
    return next(new AppError("This email is already registered.", 400));
  }

  const existingPhoneNumberRegistration = await RegistrationModel.findOne({ contactNumber: req.body.contactNumber });
  if (existingPhoneNumberRegistration) {
    return next(new AppError("This phone number is already registered.", 400));
  }
  
  await RegistrationModel.create({
    ...req.body,
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: req.body.email,
    subject: "Registration Completed successfully.",
    text: `Hello ${req.body.name}, \n
    Team GambitoR is delighted to inform you that you have successfully registered for the second edition of GambitoR! \n  
    These are the credentials you have entered. \n
    Email: ${req.body.email} \n
    Mobile Number: ${req.body.contactNumber} \n
    The first round of GambitoR will be on 29th October 2023 on THINKEXAM Platform. \n
    The credentials to your account access for the platform will be mailed 3 days prior to the examination.\n
    Follow us on our social media handles and Youtube channel to stay connected! \n
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
  const data = await RegistrationModel.find({
    class: req.body.class
  }).select("email");
  let emails = [];
  data.map((d, idx) => emails.push(d.email));
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: emails,
    subject: "GambitoR Inception round.",
    text: `Greetings from Gambitor, IIT Roorkee!

We congratulate you on registering for the first ever edition of GambitoR by IIT Roorkee. 

The time to storm your brains out, is just around the corner. 

The first stage of the exam, Inception Round is on 5th February. So get ready to compete with the best minds of the nation. 

Link to the platform: http://gambitoriitr.thinkexam.com

You can also give the exam through your mobile, the application link is 
Android: https://play.google.com/store/apps/details?id=com.ginger.thinkexam
iOS: https://itunes.apple.com/us/app/think-exam/id1294105606?ls=1&mt=8

(For the mobile application, the institute id is ‘gambitoriitr.thinkexam.com’

Your registered category is Athenox and the test duration would be for 60 minutes, timings for the same are: 11:00 AM-12:30 PM

Best wishes 
Team Gambitor
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
      message: "Mail sent successfully.",
    },
  });
});
