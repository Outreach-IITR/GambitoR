const AppError = require("../utils/appError");

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return (new AppError(message, 400))
}

const handleDuplicateFieldsDB = err => {
  const value = err.message.match(/(["'])(\\?.)*?\1/);
  console.log(value)
  const message = `Duplicate key value: ${value[0]}. Please use different value`;
  return (new AppError(message, 400));
}

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map((det) => {
    return (det.message)
  })
  const message = `Invalid input data. ${errors.join('. ')}`;
  return (new AppError(message, 400));
}

const handleJWTError = () => {
  return new AppError('Invalid Token. Please Login Again', 401);
}

const handleJWTExpired = () => new AppError('Your token is expired. Login Again', 401)

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err
  });
}

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!'
    })
  }
}

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  }
  else if (process.env.NODE_ENV) {
    let error = { ...err, message: err.message, name: err.name };

    if (error.name === 'CastError') {
      error = handleCastErrorDB(error)
    }
    if (error.code === 11000) {
      error = handleDuplicateFieldsDB(error);
    }
    if (error.name === 'ValidationError') {
      error = handleValidationErrorDB(error);
    }
    if (error.name === 'JsonWebTokenError') {
      error = handleJWTError();
    }
    if (error.name === 'TokenExpiredError') {
      error = handleJWTExpired()
    }

    sendErrorProd(error, res);
  }

  next();
}