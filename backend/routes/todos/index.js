const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  updateById,
  deleteById,
  addData
} = require("./controller");

router.get("/", getAll);
router.post("/", addData);
router.get("/:id", getById);
router.put("/edit/:id", updateById);
router.delete("/delete/:id", deleteById);

module.exports = router;
