const express = require("express");
const router = express.Router();
const { upload } = require("../../config");

router.get("/", require("./controller").getAll);
router.get("/:id", require("./controller").getByIdAll);
router.get("/id/:id", require("./controller").getById);

// router.post("/", require("./controller").addData);
router.post("/", upload.single("avatar"), require("./controller").addData);
router.post(
  "/id/:id",
  upload.single("avatar"),
  require("./controller").addDataByIdUsers
);

// uplod file ke filestack
router.post("/filestack/:id", require("./controller").addFilestact);

router.delete("/id/:id", require("./controller").deleteData);
router.put(
  "/id/:id",
  upload.single("avatar"),
  require("./controller").updateData
);

module.exports = router;
