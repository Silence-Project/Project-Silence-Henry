const { Router } = require("express");
const { orderHandler } = require('../handlers/orderHandler');

const router = Router();

router.use("/", orderHandler);

module.exports = router;