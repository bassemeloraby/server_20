const cosmotics = require("../models/cosmoticModel");
const asyncHandler = require("express-async-handler");

// @desc    Get cosmotics
// @route   GET /api/cosmotics
// @access  public
const getCosmotics = asyncHandler(async (req, res) => {
  const AllCosmotic = await cosmotics.find().sort({ Description: 1 });

  res.status(200).json(AllCosmotic);
});

module.exports = {
    getCosmotics,
};
