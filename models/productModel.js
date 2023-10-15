const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    Description: {
      type: String,
      required: [true, "Please add a value"],
    },
    Company: {
      type: String,
      required: [true, "Please add a value"],
    },
    Category: {
      type: String,
    },
    usedArea: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
