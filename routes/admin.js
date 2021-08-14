const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  fs.writeFileSync("product.txt", req.body.title);
  res.redirect("/");
});

module.exports = router;

