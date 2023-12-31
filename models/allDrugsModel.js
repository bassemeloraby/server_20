const mongoose = require("mongoose");

const allDrugsSchema = mongoose.Schema(
  {
    ScientificName: {
      type: String,
      required: [true, "Please add a value"],
    },
    TradeName: {
      type: String,
      required: [true, "Please add a value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("allDrugs", allDrugsSchema);
