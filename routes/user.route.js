const express = require("express");
const router = express.Router();
const { userController }= require("../controller");

router.post('/', userController.bookingPg);
router.get('/:id', userController.livigUsers);

module.exports = router;