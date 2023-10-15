const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Get products
// @route   GET /api/products
// @access  private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ Description: 1 });
  res.status(200).json(products);
});

// @desc    Set product
// @route   POST /api/products
// @access  puplic

const setProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    Description: req.body.Description,
    Company: req.body.Company,
    Category: req.body.Category,
    usedArea: req.body.usedArea
  });
  res.status(200).json(product);
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: "product not found" });
  }

  await product.deleteOne();
  res.status(200).json({ id: req.params.id });
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400).json({ message: 'product not found' });
  }
 
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedProduct);
});

module.exports = {
  getProducts,
  setProduct,
  deleteProduct,
  updateProduct
};
