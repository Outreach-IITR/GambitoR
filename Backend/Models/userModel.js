const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address.'],
    unique: [true, 'This email address is already in use.'],
  },
  password: {
    type: String,
    required: [true, "Enter Your Password"],
    minlength: [8, "password Length must be 8 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;