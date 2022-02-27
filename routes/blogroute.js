const express = require("express");
const router = express.Router();
const {
  insertData,
  getAllData,
  deleteData,
  updateData,
} = require("../controllers/blogController");

router.post("/blog", insertData);
router.get("/blog", getAllData);
router.delete("/blog/:id", deleteData);
router.patch("/blog/:id", updateData);

module.exports = router;
