const { Router } = require("express");
const { topTextHandler } = require('../handlers/TopTextHandler');

const router = Router();

router.use("/", topTextHandler);

module.exports = router