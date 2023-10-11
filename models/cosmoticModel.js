const mongoose = require('mongoose');

const cosmoticSchema = mongoose.Schema(
  {
    Description: String,
  },
  {
    cosCompany: String,
  }
);

module.exports = mongoose.model('cosmotics', cosmoticSchema);