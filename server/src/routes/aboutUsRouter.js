const { Router } = require("express");
const { aboutUsRouter } = require('../handlers/aboutUsHandler');

const router = Router();

router.use("/", aboutUsRouter);

module.exports = router