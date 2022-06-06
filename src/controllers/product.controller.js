const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
module.exports = router;
