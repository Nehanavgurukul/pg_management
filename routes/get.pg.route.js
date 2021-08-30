const express = require("express");
const router = express.Router();
const {getPgController} = require('../controller');

router.get('/',getPgController.get);
router.get('/:id', getPgController.getById);

module.exports = router;