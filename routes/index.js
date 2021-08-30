const express = require('express');
const router = express.Router();
const pgRoute = require("./pg.route");
const getPgRoute = require("./get.pg.route");
const pgAvailableRoute = require("./pg.available.route");
const userRoute = require("./user.route");

router.use('/post/pg', pgRoute);
router.use('/delete/pg', pgRoute);
router.use('/available/pg', getPgRoute);
router.use('/available/pg', getPgRoute);
router.use('/empty/pg', pgAvailableRoute);
router.use('/full/pg', pgAvailableRoute);
router.use('/post/user', userRoute);
router.use('/get/users', userRoute);

module.exports = router;

