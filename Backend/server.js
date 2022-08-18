const dotenv = require('dotenv')
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config();

var dbHost = process.env.DB_HOST || "localhost";
var dbName = process.env.DB_NAME;
var dbUser = process.env.DB_USERNAME;
var dbPass = process.env.DB_PASSWORD;
var dbPort = process.env.DB_PORT || "27017";

console.log(
  "mongodb://" +
  dbUser +
  ":" +
  dbPass +
  "@" +
  dbHost +
  ":" +
  dbPort +
  "/" +
  dbName
)
mongoose.connect("mongodb://" +
  dbUser +
  ":" +
  dbPass +
  "@" +
  dbHost +
  ":" +
  dbPort +
  "/" +
  dbName, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('Database Connected')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Server Started on Port', PORT);
})