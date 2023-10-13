const express = require("express");
const router = express.Router();

const { setProduct } = require("../controllers/productControllers");

router.route("/").post(setProduct);


module.exports = router;