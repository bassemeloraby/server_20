const express = require('express');
const router = express.Router();
const { getCosmotics
} = require('../controllers/cosmoticControllers');

router.route('/').get(getCosmotics)


module.exports = router;