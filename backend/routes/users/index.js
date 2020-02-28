const express = require("express");
const router = express.Router();
const { upload } = require("../../config");

const { getAll, getById, deleteById } = require("./controller");

router.post(
  "/register",
  upload.single("avatar"),
  require("./controller").addData
);
router.post("/login", require("./controller").login);

router.get("/", getAll);
router.get("/id/:id", getById);

router.delete("/id/:id", deleteById);

module.exports = router;
