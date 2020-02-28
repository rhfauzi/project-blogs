const multer = require("multer");

const configuration = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./assets/images");
  },
  filename: (req, file, cb) => {
    let filetype = "";

    if (file.mimetype === "images/png") {
      filetype = "png";
    } else if (file.mimetype === "images/jpg") {
      filetype = "jpg";
    }
    cb(null, file.originalname.replace(/ /g, "-"));
  }
});
const upload = multer({ storage: configuration });

module.exports = upload;
