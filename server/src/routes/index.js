const { Router } = require("express");
const { userHandler } = require("../handlers/userHandler");

const router = Router();

router.use("/usuarios", userHandler);

module.exports = router;