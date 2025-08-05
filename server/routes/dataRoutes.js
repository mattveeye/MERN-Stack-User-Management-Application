// routes/data.routes.js
const express = require("express");
const router = express.Router();
const { getMyData, addData, deleteData, updateData } = require("../controllers/dataControllers");
const auth = require("../middleware/auth");

// Роуты без префикса /data
router.get("/mydata", auth, getMyData);
router.post("/adddata", auth, addData);
router.delete("/deletedata", auth, deleteData);
router.put("/updatedata", auth, updateData);

module.exports = router;