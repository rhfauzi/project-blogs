require("dotenv").config();
const environment = {
  PORT: process.env.PORT
};

module.exports = environment;

// or

// module.exports = {
//   PORT:process.env.PORT
// }
