const mongoose = require("mongoose");
// const DATABASE_URL = process.env.DATABASE_URL;

mongoose
  //mongoose.connect('mongodb+srv://porus:porusruby@cluster0-rusah.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
  // .connect("mongodb://localhost/firstdb", {
  // .connect(DATABASE_URL, {
  //    "mongodb+srv://fauzi:fauzi123@cluster0-bxbeu.mongodb.net/test?retryWrites=true&w=majority",
  .connect("mongodb://localhost/firstdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connect to mongo database");
  })
  .catch(error => {
    console.log("The is something wrong", error);
  });

const db = mongoose.connect;
module.exports = db;
