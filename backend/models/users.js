const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  username: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: String
  },
  avatar: {
    type: String
  }
});

const Users = mongoose.model("users", usersSchema);
module.exports = Users;
