const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({

  rank: {
    type: Number
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  category: {
    type: String
  },
  totalMarks: {
    type: Number
  },
  totalPositiveMarks: {
    type: Number
  },
  totalNegativeMarks: {
    type: Number
  }
});

const ResultModel = mongoose.model("Registration", resultSchema);

module.exports = ResultModel;
