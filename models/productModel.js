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
    form: {
      type: String,
    },
    companyCategory1: {
      type: String,
    },
    companyCategory2: {
      type: String,
    },
    use1: {
      type: String,
    },
    use2: {
      type: String,
    },
    usedArea1: {
      type: String,
    },
    usedArea2: {
      type: String,
    },
    skinSenstivety: {
      type: Boolean,
      defultValue: false,
    },
    normalSkin: {
      type: Boolean,
      defultValue: false,
    },
    drySkin: {
      type: Boolean,
      defultValue: false,
    },
    oilySkin: {
      type: Boolean,
      defultValue: false,
    },
    combinationSkin: {
      type: Boolean,
      defultValue: false,
    },
    price: {
      type: Boolean,
    },
    picLink: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
