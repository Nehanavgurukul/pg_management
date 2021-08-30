const express = require("express");
const router = express.Router();
const {pgAvailableController} = require("../controller");

router.get('/', pgAvailableController.EmptyPG);
router.get('/', pgAvailableController.FullPG);

module.exports = router;