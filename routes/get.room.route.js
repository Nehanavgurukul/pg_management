const express = require('express');
const router = express.Router();
const { availableRoomController } = require('../controller');

router.get('/:id', availableRoomController.availableRoom);

module.exports = router;