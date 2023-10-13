const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Set product
// @route   POST /api/products
// @access  puplic

const setProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    Description: req.body.Description,
    Company: req.body.Company,
  });
  res.status(200).json(product);
});

module.exports = {
  setProduct,
};
