const { Router } = require("express");
const { carHandler } = require('../handlers/carHandler');

const router = Router();

router.use("/", carHandler);

module.exports = router;