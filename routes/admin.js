const express = require("express");
const router = express.Router();
const fs = require('fs');


router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>`
  );
});

router.post("/add-product", (req, res, next) => {
  fs.writeFileSync('product.txt',req.body.title)
  res.redirect("/");
});

module.exports = router;
