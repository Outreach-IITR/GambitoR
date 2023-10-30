const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({

  rank: {
    type: Number
  },
  email: {
    type: String,
    unique: true,
    index: true
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

const ResultModel = mongoose.model("Result", resultSchema);

module.exports = ResultModel;
