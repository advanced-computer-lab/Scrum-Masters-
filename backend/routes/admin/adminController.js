const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body.name);
});

module.exports = router;
