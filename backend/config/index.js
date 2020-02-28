const { PORT } = require("./environment"); //type of string
const upload = require("./multer"); //type object
const db = require("./connection");
const multer = require("./multer");

// console.log(typeof PORT);

module.exports = {
  PORT,
  upload,
  db,
  multer
};
