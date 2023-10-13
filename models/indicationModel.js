const mongoose = require("mongoose");

const indicationSchema = mongoose.Schema(
  {
    INDICATION: {
      type: String,
    },
    ICD_10_CODE: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("indication", indicationSchema);
