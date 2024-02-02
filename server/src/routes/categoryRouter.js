const { Router } = require("express");
const { categoryHandler } = require('../handlers/categoryHandler');

const router = Router();

router.use("/", categoryHandler);

module.exports = router;