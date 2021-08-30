const express = require("express");
const {pgController} = require("../controller");
const router = express.Router();

router.post('/',pgController.pg_post);
router.delete('/:id',pgController.delete_pg);

module.exports = router;