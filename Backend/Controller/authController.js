const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

//* Token function

const createAndSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

//This is the signup function to create user
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    // passwordChangedAt: req.body.passwordChangedAt
    role: req.body.role || "user",
  });
  createAndSendToken(newUser, 201, res);

  next();
});

//This is the login function to login the user
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Checking the Email and password exists
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  //  Finding the user with the email provided
  const user = await User.findOne({ email }).select("+password");
  // console.log(user)
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  //Creating the token
  createAndSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  // * Getting the token
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in. Please login to get access", 401)
    );
  }

  // * Verification of the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // * Check user still exists or not
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError("The user doesnot exists", 401));
  }

  // * Check if user changed password after token was issued
  // if (currentUser.changesPasswordAfter(decoded.iat)) {
  //   return next(new AppError('User recenty Changed password please log in again', 401))
  // }

  // ! Grant access to the protected routes
  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};
