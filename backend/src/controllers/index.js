const express = require('express');
const router = express.Router();

const authController = require("./auth");
const testController = require("./test");

router.use('/auth', authController);
router.use('/test', testController);

module.exports = router;