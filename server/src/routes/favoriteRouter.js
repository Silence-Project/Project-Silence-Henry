const { Router } = require("express");
const { favoriteHandler } = require('../handlers/favoriteHandler');

const router = Router();

router.use("/", favoriteHandler);

module.exports = router;