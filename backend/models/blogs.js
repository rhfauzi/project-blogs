const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
  judul: {
    type: String
  },
  deskripsi: {
    type: String
  },
  avatar: {
    type: String
  },
  status: {
    type: String
  },
  idUsers: {
    type: String
  }
});

const Blogs = mongoose.model("blogs", blogsSchema);
module.exports = Blogs;
