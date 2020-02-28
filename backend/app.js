var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
// var expressJWT = require("express-jwt");

var indexRouter = require("./routes/index");
const jwt = require("express-jwt");

var app = express();

app.use(cors());
// app.use(logger("dev"));
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "assets")));

app.use(
  jwt({ secret: "INISECRET" }).unless({
    path: [
      { url: "/", methods: ["GET"] },
      { url: "/blogs", methods: ["GET"] },
      { url: /^\/blogs\/detail\/.*/, methods: ["GET"] },
      { url: /^\/assets\/.*/, methods: ["GET"] },
      { url: "/users/login", methods: ["POST"] },
      { url: "/users/register", methods: ["POST"] }
    ]
  })
);

app.use(function(err, req, res, next) {
  if (err.name !== "UnauthorizedError") {
    //res.status(401).send('You can\'t access this data ');
    next();
  } else {
    return res.status(401).send({ message: "You are not a member" });
  }
});

app.use("/", indexRouter);
app.use("/users", require("./routes/users"));
app.use("/blogs", require("./routes/blogs"));
app.use("/assets", express.static("assets"));

module.exports = app;
