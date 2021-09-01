const express = require("express");
const router = express.Router();
const {AllUsersController} = require('../controller');

router.get('/', AllUsersController.AllUsers);

module.exports = router;